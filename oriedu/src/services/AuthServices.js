import {
  userSignIn,
  recoveryPassword,
  resetPassword,
  verifyUser,
} from "@src/api";

import config from "@src/config";

export class AuthServices {
  static async signIn(cpf, password) {
    const response = await userSignIn({ cpf: cpf, password: password });

    if (response.status === 200) {
      const { app, token } = response.data;

      window.location.href = `${config.protocol}${app}.${config.app}/sign/${token}`;
    } else {
      return response;
    }
  }

  static async recoveryPassword(cpf, navigate) {
    const response = await recoveryPassword({ cpf: cpf });

    if (response.status === 200) {
      const { token } = response.data;

      navigate.push(`/recuperar-senha/${token}`);
    } else {
      return response;
    }
  }

  static async isUser(code, token, navigate) {
    const response = await verifyUser({
      code: code,
      token: token,
    });

    if (response.status === 200) {
      const { token } = response.data;
      navigate.push(`/atualizar-senha/${token}`);
    } else {
      return response;
    }
  }

  static async resetPassword(password, token, navigate) {
    const response = await resetPassword({
      password: password,
      token: token,
    });

    if (response.status === 204) {
      navigate("/login");
    } else {
      return response;
    }
  }
}
