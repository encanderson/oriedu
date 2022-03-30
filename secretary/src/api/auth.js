import axios from "axios";

import { createUrl } from "./baseUrl";

export const userSignIn = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrl(`/auth/confirm-user`),
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
      baseURL: createUrl(`/auth/logout`),
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

export const getUser = async () => {
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

    return response.data;
  }
};
