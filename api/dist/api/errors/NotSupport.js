"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotSupport = void 0;

class NotSupport extends Error {
  constructor(contentType) {
    super(`O tipo de conteúdo ${contentType} não é suportado`);
    this.name = "NotSupport";
  }

}

exports.NotSupport = NotSupport;