"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Forbidden = void 0;

class Forbidden extends Error {
  constructor() {
    super("Acesso negado, verifique suas credenciais.");
    this.name = "Forbidden";
  }

}

exports.Forbidden = Forbidden;