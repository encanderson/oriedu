import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class StudentServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/students/${path}`);
    } else {
      this.path = createUrl(`/students`);
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
}

export const initStudentService = async (path, method) => {
  const service = new StudentServices(path, method);

  return { service };
};
