import axios from "axios";

import { createUrl } from "@src/api";
import { getCredentials } from "@src/apps/services/credentials";

class AdminServices {
  constructor(path, method) {
    if (path) {
      this.path = createUrl(`/questions/${path}`);
    } else {
      this.path = createUrl(`/questions`);
    }
    this.method = method;
  }

  async createMessage(message) {
    try {
      const isValid = await getCredentials(this);

      if (!isValid) {
        return false;
      }

      const response = await axios({ ...this.options, data: message });

      return response;
    } catch (err) {
      const { response } = err;

      return response;
    }
  }
}

export const initAdminService = async (path, method) => {
  const service = new AdminServices(path, method);

  return { service };
};
