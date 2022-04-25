import axios from "axios";

import { createUrl } from "./baseUrl";
import { verifyCredentials } from "./";

export const updateSchool = async (data) => {
  const isValid = await verifyCredentials();

  if (!isValid) {
    return { message: "Credenciais inválidas." };
  }

  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrl(`/school`),
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
