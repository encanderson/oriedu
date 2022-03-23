import { Users } from "../repositories";
import { AccessToken } from "@src/utils";

export class AuthServices {
  static async confirmUser(token: string): Promise<void> {
    const userId = AccessToken.verifyToken(token);

    await Users.confirmUser(userId.userId);
  }
}
