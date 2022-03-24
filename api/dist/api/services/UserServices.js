"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersServices = void 0;

var _repositories = require("../repositories");

var _utils = require("../../utils");

var _config = require("../../config");

var _subscribers = require("../subscribers");

class UsersServices {
  static async createUser(newUser) {
    const user = await _repositories.Users.searchUser(newUser);
    const code = (0, _utils.generateCode)();
    (0, _utils.verifyRegister)(newUser);

    const token = _utils.AccessToken.generateToken({
      userId: (0, _utils.hashFunction)(newUser.cpf),
      expires: "180m",
      app: newUser.app
    });

    await (0, _subscribers.sendEmail)(newUser.email, "Verificação de email", (0, _config.htmlCode)("Nome", token, "confirmar-registro"));
    user.createUser(code);
  }

}

exports.UsersServices = UsersServices;