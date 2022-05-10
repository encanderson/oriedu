import axios from "axios";

import { getCredentialsOptions, createUrl } from "@src/api";

export const employeeServices = async (path, method, data) => {
  const options = await getCredentialsOptions();

  if (!options) {
    return { message: "Credenciais inválidas." };
  }

  try {
    const response = await axios({
      ...options,
      method: method,
      baseURL: createUrl(`/school${path}`),
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};
