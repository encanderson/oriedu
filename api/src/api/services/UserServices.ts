import { Users } from "../repositories";

import { User } from "@src/@types";

export class UserServices {
  static async getUser(userId: string): Promise<User> {
    const user = await Users.getUser(userId);

    return user;
  }
}
