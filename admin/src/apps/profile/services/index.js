import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class UserServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/user/${path}`);
    } else {
      this.path = createUrl(`/user`);
    }
    this.method = method;
  }

  async get() {
    try {
      const isValid = await getCredentials(this);

      if (!isValid) {
        return false;
      }

      const response = await axios(this.options);

      return response;
    } catch (err) {
      const { response } = err;

      return response;
    }
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

export const initUserService = async (path, method) => {
  const service = new UserServices(path, method);

  return { service };
};
