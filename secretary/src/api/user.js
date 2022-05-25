import axios from "axios";

import { createUrl } from "./baseUrl";
import { getCredentialsOptions } from "./";

export const getProfile = async () => {
  const options = await getCredentialsOptions();

  if (!options) {
    return { message: "Credenciais inválidas." };
  }

  try {
    const response = await axios({
      method: "GET",
      baseURL: createUrl(`/user`),
      ...options,
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};

export const updateProfile = async (data) => {
  const options = await getCredentialsOptions();

  if (!options) {
    return { message: "Credenciais inválidas." };
  }

  try {
    const response = await axios({
      method: "PUT",
      baseURL: createUrl(`/user`),
      data: data,
      ...options,
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};
