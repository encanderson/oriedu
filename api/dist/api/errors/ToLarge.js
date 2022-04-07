"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToLarge = void 0;

class ToLarge extends Error {
  constructor() {
    super("O arquivo enviado deve ser menor.");
    this.name = "ToLarge";
  }

}

exports.ToLarge = ToLarge;