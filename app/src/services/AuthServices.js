import { userSignIn, getUser } from "@src/api";

const items = ["id", "userId", "email", "app", "name", "picture"];

export class AuthServices {
  static async signIn(code, token) {
    const response = await userSignIn({ code: code, token: token });
    if (response.status === 200) {
      localStorage.setItem("serviceToken", response.headers["access-token"]);

      localStorage.setItem("refreshToken", response.headers["refresh-token"]);

      const user = {};

      items.forEach((item) => (user[item] = response.data[item]));

      return user;
    } else {
      return response;
    }
  }

  static async getUser() {
    const response = await getUser();

    if (response.status === 200) {
      const user = {};

      items.forEach((item) => (user[item] = response.data[item]));

      return user;
    } else {
      return response;
    }
  }

  static async logout() {
    sessionStorage.removeItem("serviceToken");

    sessionStorage.removeItem("refreshToken");
  }
}
