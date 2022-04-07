"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidField = void 0;

class InvalidField extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidField";
  }

}

exports.InvalidField = InvalidField;