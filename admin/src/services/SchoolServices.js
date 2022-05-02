import axios from "axios";

import { updateSchool, getCredentialsOptions, createUrl } from "@src/api";

export class SchoolServices {
  constructor() {
    this.path = "/school";
  }

  static async update(data) {
    const response = await updateSchool(data);

    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }

  static async createClass(data) {
    try {
      const options = await getCredentialsOptions();

      if (!options) {
        return { message: "Credenciais inválidas." };
      }
      const response = await axios({
        method: "POST",
        baseURL: createUrl(`/class`),
        data: data,
        ...options,
      });

      if (response.status === 204) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      const { response } = err;

      return response;
    }
  }

  static async getClasses(id) {
    try {
      const options = await getCredentialsOptions();

      if (!options) {
        return { message: "Credenciais inválidas." };
      }

      const response = await axios({
        method: "GET",
        baseURL: createUrl(`/class/${id}`),
        ...options,
      });

      return response;
    } catch (err) {
      const { response } = err;

      return response;
    }
  }
}
