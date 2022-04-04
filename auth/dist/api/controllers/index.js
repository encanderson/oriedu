"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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

var _UpdateControllers = require("./UpdateControllers");

Object.keys(_UpdateControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UpdateControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UpdateControllers[key];
    }
  });
});

var _DocsControllers = require("./DocsControllers");

Object.keys(_DocsControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DocsControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DocsControllers[key];
    }
  });
});