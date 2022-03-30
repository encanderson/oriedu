import config from "@src/config";

const URL = config.api;

export const createUrl = (path) => {
  const url = `${URL}${path}`;
  return url;
};
