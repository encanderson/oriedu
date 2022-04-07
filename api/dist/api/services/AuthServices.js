"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthServices = void 0;

var _repositories = require("../repositories");

var _utils = require("../../utils");

class AuthServices {
  static async confirmUser(token) {
    const userId = _utils.AccessToken.verifyToken(token);

    await _repositories.Users.confirmUser(userId.userId);
  }

}

exports.AuthServices = AuthServices;