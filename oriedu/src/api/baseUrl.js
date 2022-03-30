import config from "@src/config";

const AUTH_URL = config.auth;

export const createUrlAuth = (path) => {
  const url = `${AUTH_URL}${path}`;
  return url;
};
