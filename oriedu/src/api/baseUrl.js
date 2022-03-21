import config from "@src/config";

const AUTH_URL = config.baseUrl;

export const createUrlAuth = (path) => {
  const url = `${AUTH_URL}${path}`;
  return url;
};
