import config from "./";

const URL = config.api;

const AUTH_URL = config.auth;

export const createUrl = (path) => {
  const url = `${URL}${path}`;
  return url;
};

export const createUrlAuth = (path) => {
  const url = `${AUTH_URL}${path}`;
  return url;
};
