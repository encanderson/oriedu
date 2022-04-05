import axios from "axios";

import { createUrl } from "./baseUrl";
import { verifyCredentials } from "./";

export const getProfile = async () => {
  const isValid = await verifyCredentials();

  if (!isValid) {
    return { message: "Credenciais inválidas." };
  }

  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  try {
    const response = await axios({
      method: "GET",
      baseURL: createUrl(`/user`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceToken}`,
        "Refresh-Token": refreshToken,
      },
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};

export const updateProfile = async (data) => {
  const isValid = await verifyCredentials();

  if (!isValid) {
    return { message: "Credenciais inválidas." };
  }

  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  try {
    const response = await axios({
      method: "PUT",
      baseURL: createUrl(`/user`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceToken}`,
        "Refresh-Token": refreshToken,
      },
      data: data,
    });

    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};
