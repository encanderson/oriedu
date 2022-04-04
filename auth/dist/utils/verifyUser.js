"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUser = void 0;

var _errors = require("../errors");

var _ = require("./");

var _services = require("../api/services");

var _models = require("../api/models");

const isUser = async user => {
  if (!user) {
    throw new _errors.NotAuthenticate("Usuário não reconhecido.");
  }

  if (!user.active) {
    const token = _.AccessToken.generateToken({
      userId: user.userId,
      expires: "180m",
      app: user.app
    });

    await (0, _services.sendEmail)(user.email, "Verificação de email", (0, _models.htmlCode)(token, "confirmar-registro"));
    throw new _errors.NotAuthenticate("Email não confirmado, por favor, verifique o seu email.");
  }
};

exports.isUser = isUser;