"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _access = require("./access.token");

Object.keys(_access).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _access[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _access[key];
    }
  });
});

var _hashFunction = require("./hashFunction");

Object.keys(_hashFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hashFunction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hashFunction[key];
    }
  });
});

var _handleTokens = require("./handleTokens");

Object.keys(_handleTokens).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _handleTokens[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _handleTokens[key];
    }
  });
});

var _refresh = require("./refresh.token");

Object.keys(_refresh).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _refresh[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _refresh[key];
    }
  });
});

var _generateCode = require("./generateCode");

Object.keys(_generateCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _generateCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generateCode[key];
    }
  });
});

var _time = require("./time");

Object.keys(_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _time[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _time[key];
    }
  });
});

var _verifyUser = require("./verifyUser");

Object.keys(_verifyUser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _verifyUser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _verifyUser[key];
    }
  });
});