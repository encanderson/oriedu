import axios from "axios";

import { createUrlAuth } from "./baseUrl";

export async function confirmRegister(token) {
  try {
    const response = await axios({
      method: "GET",
      baseURL: createUrlAuth(`/auth/${token}`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
      baseURL: createUrlAuth(`/auth/login`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
};

export async function recoveryPassword(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/recovery-password`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
}

export async function resetPassword(data) {
  try {
    const response = await axios({
      method: "PUT",
      baseURL: createUrlAuth(`/recovery-password`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
}

export async function verifyUser(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlAuth(`/auth/confirm-user`),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (err) {
    const { response } = err;

    return response;
  }
}
