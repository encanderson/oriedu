import config from "@src/config";

const AUTH_URL = config.auth;
const API_URL = config.api;

export const createUrlAuth = (path) => {
  const url = `${AUTH_URL}${path}`;
  return url;
};

export const createUrlApi = (path) => {
  const url = `${API_URL}${path}`;
  return url;
};
