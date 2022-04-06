import { Users } from "../repositories";

import { User, Profile } from "@src/@types";

import { filterProfile, comparePassword, hashPassword } from "../../utils";

export class UserServices {
  static async getUser(userId: string): Promise<User> {
    const user = await Users.getUser(userId);

    delete user.password;

    return user;
  }

  static async update(
    userId: string,
    data: Profile,
    actualPassword: string
  ): Promise<void> {
    if (!actualPassword) {
      const obj = filterProfile(data);
      await Users.update(userId, obj);
    } else {
      const { password } = await Users.getUser(userId);

      await comparePassword(actualPassword, password);

      await Users.updatePassword(userId, await hashPassword(data.newPassword));
    }
  }
}
