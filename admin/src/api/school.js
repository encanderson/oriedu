import axios from "axios";

import { createUrl } from "./baseUrl";
import { getCredentialsOptions } from "./";

export const updateSchool = async (data) => {
  const options = await getCredentialsOptions();

  if (!options) {
    return { message: "Credenciais inválidas." };
  }

  try {
    const response = await axios({
      method: "PUT",
      baseURL: createUrl(`/school`),
      data: data,
      ...options,
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};
