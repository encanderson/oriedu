import axios from "axios";

import { createUrlAuth, getCredentialsOptions } from "./";

export const userSignIn = async (data, token) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/verify-user`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response.data.message;
  }
};

export const logoutUser = async () => {
  const options = await getCredentialsOptions();

  if (!options) {
    return { message: "Credenciais inválidas." };
  }

  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/logout`),
      ...options,
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response.data;
  }
};
