"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verifyCode = require("./verifyCode");

Object.keys(_verifyCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _verifyCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _verifyCode[key];
    }
  });
});

var _confirmEmail = require("./confirmEmail");

Object.keys(_confirmEmail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _confirmEmail[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _confirmEmail[key];
    }
  });
});