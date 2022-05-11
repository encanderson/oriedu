import jwtDecode from "jwt-decode";
import axios from "axios";

import { createUrlAuth } from "./";

export const setHeaders = (
  createUrlFunction,
  path,
  serviceToken,
  refreshToken
) => {
  const options = {
    baseURL: createUrlFunction(path),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceToken}`,
      "Refresh-Token": refreshToken,
    },
  };
  return options;
};

export const refreshAccessToken = async (serviceToken, refreshToken) => {
  try {
    const response = await axios({
      ...setHeaders(
        createUrlAuth,
        `/auth/refresh-token`,
        serviceToken,
        refreshToken
      ),
      method: "POST",
    });

    localStorage.setItem("serviceToken", response.headers["access-token"]);

    localStorage.setItem("refreshToken", response.headers["refresh-token"]);

    return response;
  } catch (err) {
    const { response } = err;

    return response.data;
  }
};

export const getCredentialsOptions = async () => {
  const serviceToken = window.localStorage.getItem("serviceToken");
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);

  const refreshToken = window.localStorage.getItem("refreshToken");

  if (decoded.exp < Date.now() / 1000) {
    const response = await refreshAccessToken(serviceToken, refreshToken);

    if (response.status === 204) {
      localStorage.setItem("serviceToken", response.headers["access-token"]);

      localStorage.setItem("refreshToken", response.headers["refresh-token"]);
      return {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${response.headers["access-token"]}`,
          "Refresh-Token": response.headers["refresh-token"],
        },
      };
    } else {
      return false;
    }
  } else {
    return {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceToken}`,
        "Refresh-Token": refreshToken,
      },
    };
  }
};

export const verifyCredentials = async () => {
  const serviceToken = window.localStorage.getItem("serviceToken");
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);

  if (decoded.exp < Date.now() / 1000) {
    const refreshToken = window.localStorage.getItem("refreshToken");

    const response = await refreshAccessToken(serviceToken, refreshToken);

    if (response.status === 204) {
      localStorage.setItem("serviceToken", response.headers["access-token"]);

      localStorage.setItem("refreshToken", response.headers["refresh-token"]);
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
