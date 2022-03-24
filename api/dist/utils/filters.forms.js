"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTermsConsents = exports.verifyRegister = void 0;

var _errors = require("../api/errors");

const verifyTermsConsents = consents => {
  if (consents.privacy && consents.terms) {
    return;
  }

  throw new _errors.InvalidField("É necessário confirmar os termos de uso e privacidade");
};

exports.verifyTermsConsents = verifyTermsConsents;

const verifyRegister = user => {
  verifyTermsConsents(user.consents);
  const fields = ["app", "cpf", "email", "password", "job", "name", "consents"];
  let verify = true;
  fields.forEach(item => {
    if (!user[item]) {
      verify = false;
    }
  });
  Object.keys(user).some(key => {
    if (!user[key]) {
      verify = false;
    }
  });

  if (verify) {
    return;
  }

  throw new _errors.InvalidField("Verificar os campos não preenchidos.");
};

exports.verifyRegister = verifyRegister;