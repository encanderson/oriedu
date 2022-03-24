"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserServices = require("./UserServices");

Object.keys(_UserServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UserServices[key];
    }
  });
});

var _AuthServices = require("./AuthServices");

Object.keys(_AuthServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AuthServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AuthServices[key];
    }
  });
});