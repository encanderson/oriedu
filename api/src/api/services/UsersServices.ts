import { Users } from "../repositories";

import { User } from "@src/@types";
import { hashFunction, AccessToken, verifyRegister } from "@src/utils";
import { htmlCode } from "../../config";
import { sendEmail } from "../subscribers";

export class UsersServices {
  static async createUser(newUser: User): Promise<void> {
    const user = await Users.searchUser(newUser);

    verifyRegister(newUser);

    const token = AccessToken.generateToken({
      user_id: hashFunction(newUser.cpf),
      expires: "180m",
      app: newUser.app,
    });

    await sendEmail(
      newUser.email,
      "Verificação de email",
      htmlCode("Nome", token, "confirmar-registro")
    );

    user.createUser();
  }
}
