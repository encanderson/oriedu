import axios from "axios";

import { createUrlAuth } from "@src/api";
import { getCredentials } from "./";

class AuthServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrlAuth(`/auth/${path}`);
    } else {
      this.path = createUrlAuth(`/auth`);
    }
    this.method = method;
  }

  async update(data) {
    try {
      const isValid = await getCredentials(this);

      if (!isValid) {
        return false;
      }

      const response = await axios({ ...this.options, data: data });

      return response;
    } catch (err) {
      const { response } = err;

      return response;
    }
  }
}

export const initAuthService = async (path, method) => {
  const service = new AuthServices(path, method);

  return { service };
};
