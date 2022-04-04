"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewCredentials = exports.setHeaderTokens = exports.getTokens = void 0;

var _ = require("./");

const getTokens = req => {
  const authHeader = req.headers.authorization;
  const parts = authHeader.split(" ");
  let accessToken;

  if (parts.length === 2) {
    accessToken = parts[1];
  }

  const refreshToken = req.header("refresh-token");
  return {
    accessToken,
    refreshToken
  };
};

exports.getTokens = getTokens;

const setHeaderTokens = (res, user) => {
  res.setHeader("Access-Token", user.accessToken);
  res.setHeader("Refresh-Token", user.refreshToken);
  delete user.accessToken;
  delete user.refreshToken;
  return user;
};

exports.setHeaderTokens = setHeaderTokens;

const setNewCredentials = async (req, res) => {
  const {
    refreshToken
  } = getTokens(req);
  const credentials = await _.RefreshToken.verifyToken(refreshToken);
  const user = JSON.parse(credentials);

  const accessToken = _.AccessToken.generateToken({
    userId: user.userId,
    expires: "15m",
    app: JSON.parse(credentials).app,
    id: user.id
  });

  const {
    newRefreshToken
  } = await _.RefreshToken.generateToken(user);
  await _.RefreshToken.deleteToken(refreshToken);
  setHeaderTokens(res, {
    accessToken: accessToken,
    refreshToken: newRefreshToken
  });
};

exports.setNewCredentials = setNewCredentials;