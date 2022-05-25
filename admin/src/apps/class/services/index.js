import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class ClassServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/school/class/${path}`);
    } else {
      this.path = createUrl(`/class`);
    }
    this.method = method;
  }

  async create(data) {
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

  async getClasses() {
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

  async getClass(path) {
    try {
      this.path = createUrl(path);
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
}

export const initClassService = async (path, method) => {
  const service = new ClassServices(path, method);

  return { service };
};
