import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class SchoolServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/school/${path}`);
    } else {
      this.path = createUrl(`/school`);
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

  async getStudents() {
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
}

export const initSchoolService = async (path, method) => {
  const service = new SchoolServices(path, method);

  return { service };
};
