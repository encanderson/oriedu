import axios from "axios";

import { createUrlAuth, createUrlApi } from "./baseUrl";

export async function createUser(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlApi(`/users`),
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

export const getUser = async () => {
  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  try {
    const response = await axios({
      method: "GET",
      baseURL: createUrlAuth(`/user`),
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
