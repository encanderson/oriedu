"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersControllers = require("./UsersControllers");

Object.keys(_UsersControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UsersControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UsersControllers[key];
    }
  });
});

var _AuthControllers = require("./AuthControllers");

Object.keys(_AuthControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AuthControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AuthControllers[key];
    }
  });
});