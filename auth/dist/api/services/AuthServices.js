"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthServices = void 0;

var _repositories = require("../repositories");

var _errors = require("../../errors");

var _utils = require("../../utils");

var _subscribers = require("../subscribers");

class AuthServices {
  static async checkSignIn(user, userCode) {
    const code = await _repositories.AuthRepository.confirmUser(user.userId);

    if (code != userCode) {
      throw new _errors.NotAuthenticate("Código inválido.");
    }

    const accessToken = _utils.AccessToken.generateToken({
      userId: user.userId,
      expires: "15m",
      app: user.app,
      id: user.id
    });

    const {
      newRefreshToken
    } = await _utils.RefreshToken.generateToken({
      userId: user.userId,
      app: user.app
    });
    user.accessToken = accessToken;
    user.refreshToken = newRefreshToken;
    return user;
  }

  static async confirmEmail(token) {
    const payload = _utils.AccessToken.verifyToken(token);

    await _repositories.AuthRepository.confirmEmail(payload.userId);
  }

  static async logout(accessToken, refreshToken) {
    try {
      await _subscribers.managerAllowlist.delete(refreshToken);
      await _subscribers.Blocklist.setToken(accessToken);
    } catch (err) {
      throw new _errors.NotAuthenticate("Token Inválido");
    }
  }

  static async confirmUser(token, code) {
    const {
      userId
    } = _utils.AccessToken.verifyToken(token);

    const user = await _repositories.AuthRepository.verifyUser(userId);

    if (user.code != code) {
      throw new _errors.NotAuthenticate("Código Inválido");
    }

    await _subscribers.Blocklist.setToken(token);

    const accessToken = _utils.AccessToken.generateToken({
      userId: userId,
      app: "",
      expires: "5m"
    });

    return accessToken;
  }

}

exports.AuthServices = AuthServices;