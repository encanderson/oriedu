"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidToken = void 0;

class InvalidToken extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidToken";
  }

}

exports.InvalidToken = InvalidToken;