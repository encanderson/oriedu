"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserExist = void 0;

class UserExist extends Error {
  constructor() {
    super("Usuário(a) já foi existe.");
    this.name = "UserExist";
  }

}

exports.UserExist = UserExist;