import axios from "axios";

import { createUrlAuth } from "./baseUrl";

export async function createUser(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/users`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

export const userSignIn = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/check-singin`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response.data;
  }
};

export const logoutUser = async () => {
  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/logout`),
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

    return response.data;
  }
};

export async function recoveryPassword(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/recovery-password`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function resetPassword(data) {
  try {
    const response = await axios({
      method: "PUT",
      baseURL: createUrlAuth(`/auth/recovery-password`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}
