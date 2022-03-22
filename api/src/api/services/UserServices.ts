import { Users } from "../repositories";

import { User } from "@src/@types";
import { generateCode } from "@src/utils";

export class UsersServices {
  static async createUser(newUser: User): Promise<void> {
    const user = await Users.searchUser(newUser);

    const code = generateCode();

    user.createUser(code);
  }
}
