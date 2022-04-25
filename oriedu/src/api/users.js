import axios from "axios";

import { createUrlApi } from "./baseUrl";

export async function sendContact(data) {
  try {
    const response = await axios({
      method: "POST",
      baseURL: createUrlApi(`/admin/contact`),
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
