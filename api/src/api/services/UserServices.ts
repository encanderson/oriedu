import { Users } from "../repositories";

import { User, Profile } from "@src/@types";

import { filterProfile, comparePassword, hashPassword } from "../../utils";

export class UserServices {
  static async getUser(user_id: string): Promise<User> {
    const user = await Users.getUser(user_id);

    delete user.password;

    return user;
  }

  static async update(
    user_id: string,
    data: Profile,
    actualPassword: string
  ): Promise<void> {
    if (!actualPassword) {
      const obj = filterProfile(data);
      await Users.update(user_id, obj);
    } else {
      const { password } = await Users.getUser(user_id);

      await comparePassword(actualPassword, password);

      await Users.updatePassword(user_id, await hashPassword(data.newPassword));
    }
  }
}
