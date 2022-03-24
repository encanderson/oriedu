"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Users = require("./Users");

Object.keys(_Users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Users[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Users[key];
    }
  });
});