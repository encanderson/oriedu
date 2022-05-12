import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class EmployeeServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/school/${path}`);
    } else {
      this.path = createUrl(`/school`);
    }
    this.method = method;
  }

  async request(data) {
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

export const initEmployeeService = async (path, method) => {
  const service = new EmployeeServices(path, method);

  return { service };
};
