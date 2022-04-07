"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = void 0;

class NotFound extends Error {
  constructor(field) {
    super(`${field} não encontrado.`);
    this.name = "NotFound";
  }

}

exports.NotFound = NotFound;