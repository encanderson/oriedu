import { Users } from "../repositories";

import { User, Profile } from "@src/@types";

export class UserServices {
  static async getUser(userId: string): Promise<User> {
    const user = await Users.getUser(userId);

    return user;
  }

  static async update(userId: string, data: Profile): Promise<void> {
    await Users.update(userId, data);
  }
}
