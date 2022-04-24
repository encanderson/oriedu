import { SchoolRepository, Users } from "../repositories";

import { School, User } from "../../@types";

import { filterForm } from "../validators";
import { htmlCode } from "../../config";
import { sendEmail } from "../subscribers";
import { AccessToken } from "@src/utils";

export class AdminServices {
  static async createSchoolAndAdminUser(data: School | User): Promise<void> {
    const userData = filterForm(data, ["app", "cpf", "email", "name"]) as User;

    const user = await Users.searchUser(userData);

    const obj = filterForm(data, [
      "cnpj",
      "fantasia",
      "email",
      "phone",
    ]) as School;

    const school = await SchoolRepository.searchSchool(obj);

    await user.create();

    await school.create(user);

    const token = AccessToken.generateToken({
      user_id: user.user_id,
      expires: "1440m",
      app: user.user.app,
    });

    await sendEmail(
      user.user.email,
      "Verificação de email",
      htmlCode("Nome", token, "confirmar-registro")
    );
  }
}
