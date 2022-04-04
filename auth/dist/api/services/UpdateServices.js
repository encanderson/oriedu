"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateServices = void 0;

var _repositories = require("../repositories");

var _utils = require("../../utils");

var _models = require("../models");

var _ = require("./");

class UpdateServices {
  static async verifyUser(cpf) {
    const userId = (0, _utils.hashFunction)(cpf);
    const user = await _repositories.AuthRepository.verifyUser(userId);
    const code = (0, _utils.generateCode)();
    await (0, _.sendEmail)(user.email, "Verificar Usuário", (0, _models.htmlVerify)(code));
    await _repositories.AuthRepository.update(userId, {
      code: code
    });

    const token = _utils.AccessToken.generateToken({
      userId: user.userId,
      app: user.app,
      expires: "3m"
    });

    return token;
  }

  static async updatePassword(password, token) {
    const {
      userId
    } = _utils.AccessToken.verifyToken(token);

    await _repositories.AuthRepository.update(userId, {
      password: password
    });
  }

  static async updateEmail(email, token) {
    const payload = _utils.AccessToken.verifyToken(token);

    const userId = payload.userId;
    await _repositories.AuthRepository.update(userId, {
      email: email
    });
  }

}

exports.UpdateServices = UpdateServices;