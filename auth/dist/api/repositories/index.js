"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Auth = require("./Auth");

Object.keys(_Auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Auth[key];
    }
  });
});