"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotAuthenticate = void 0;

class NotAuthenticate extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NotAuthenticate";
  }

}

exports.NotAuthenticate = NotAuthenticate;