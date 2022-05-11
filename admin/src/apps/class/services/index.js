import axios from "axios";

import { createUrl, verifyCredentials } from "@src/api";

export class ClassServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/class/${path}`);
    } else {
      this.path = createUrl(`/class`);
    }
    this.method = method;
  }

  async credentials() {
    const isValid = await verifyCredentials();

    if (!isValid) {
      return false;
    }

    const serviceToken = window.localStorage.getItem("serviceToken");
    const refreshToken = window.localStorage.getItem("refreshToken");

    this.options = {
      method: this.method,
      baseURL: this.path,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceToken}`,
        "Refresh-Token": refreshToken,
      },
    };

    return true;
  }

  async create(data) {
    try {
      const isValid = await this.credentials();

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

  async getClasses() {
    try {
      const isValid = await this.credentials();

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
}

export const initClassService = async (path, method) => {
  const service = new ClassServices(path, method);

  return { service };
};
