import { userSignIn, logoutUser, getProfile } from "@src/api";

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
    const response = await getProfile();

    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  }

  static async logout() {
    await logoutUser();
  }
}
