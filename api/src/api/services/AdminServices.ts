import { SchoolRepository, Users, AdminRepository } from "../repositories";

import { School, User } from "../../@types";

import { filterForm } from "../validators";
import { htmlCode, userForm, schoolForm } from "../../config";
import { sendEmail } from "../subscribers";
import { AccessToken, hashFunction, hashPassword } from "@src/utils";
import { setRegisterNumber } from "../helpers";
import { UserExist } from "../../errors";

export class AdminServices {
  static async create(cpf: string, password: string): Promise<void> {
    try {
      const user_id = hashFunction(cpf);

      const hash = await hashPassword(password);

      await AdminRepository.create(user_id, hash);
    } catch (err) {
      throw new UserExist("Usuário já existe");
    }
  }

  static async createSchoolAndAdminUser(data: School | User): Promise<void> {
    const userData = filterForm(data, userForm) as User;

    const user = await Users.searchUser(userData);

    const obj = filterForm(data, schoolForm) as School;

    const register = setRegisterNumber(obj.fantasia);

    const school = await SchoolRepository.searchSchool(obj);

    await user.create();

    await school.create(user, register);

    const token = AccessToken.generateToken({
      user_id: user.user_id,
      expires: "1440m",
      app: user.user.app,
    });

    await sendEmail(
      user.user.email,
      "Verificação de email",
      htmlCode(user.user.name, token, "confirmar-registro")
    );
  }

  static async contact(msg: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Promise<void> {
    await sendEmail(
      "anderson.oliveira@orisistem.com",
      "Verificação de email",
      `${msg.name} deseja informações. Telegone: ${msg.phone}, email: ${msg.email} - Mensagem: ${msg.message}`
    );
  }
}
