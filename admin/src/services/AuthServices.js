import { userSignIn, getUser, logoutUser } from "@src/api";

const items = [
  "school_id",
  "user_id",
  "email",
  "app",
  "name",
  "picture",
  "job",
];

export class AuthServices {
  static async signIn(code, token) {
    const response = await userSignIn({ code: code }, token);
    if (response.status === 200) {
      localStorage.setItem("serviceToken", response.headers["access-token"]);

      localStorage.setItem("refreshToken", response.headers["refresh-token"]);

      return true;
    } else {
      return false;
    }
  }

  static async getUser() {
    const response = await getUser();

    if (response.status === 200) {
      const user = {};

      items.forEach((item) => (user[item] = response.data[item]));

      return user;
    } else {
      return false;
    }
  }

  static async logout() {
    await logoutUser();
  }
}
