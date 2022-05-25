import { verifyCredentials } from "@src/api";

export const getCredentials = async (obj) => {
  const isValid = await verifyCredentials();

  if (!isValid) {
    return false;
  }

  const serviceToken = window.localStorage.getItem("serviceToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  obj.options = {
    method: obj.method,
    baseURL: obj.path,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceToken}`,
      "Refresh-Token": refreshToken,
    },
  };

  return true;
};
