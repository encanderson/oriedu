import axios from "axios";

import { createUrlApi } from "./baseUrl";

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
