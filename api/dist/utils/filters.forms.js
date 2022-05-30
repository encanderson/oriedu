"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTermsConsents = exports.verifyRegister = exports.filterProfile = exports.filterPayload = exports.filterOptions = void 0;

var _errors = require("../errors");

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

const filterProfile = (data, fields) => {
  const obj = {};
  Object.keys(data).forEach(key => {
    if (fields.includes(key)) {
      obj[key] = data[key];
    }
  });
  return obj;
};

exports.filterProfile = filterProfile;

const filterPayload = (payload, fields) => {
  const obj = {};
  fields.forEach(key => {
    if (payload[key]) {
      obj[key] = payload[key];
    } else {
      throw new _errors.InvalidField("Todos os campos obrigatórios devem ser preenchidos.");
    }
  });
  return obj;
};

exports.filterPayload = filterPayload;

const filterOptions = (payload, fields) => {
  const obj = {};

  for (let i = 0; i < fields.length; i += 1) {
    if (payload[fields[i]]) {
      obj[fields[i]] = payload[fields[i]];
    }
  }

  return obj;
};

exports.filterOptions = filterOptions;