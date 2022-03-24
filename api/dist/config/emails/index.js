"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendCode = require("./sendCode");

Object.keys(_sendCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sendCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sendCode[key];
    }
  });
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