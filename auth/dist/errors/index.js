"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Forbidden = require("./Forbidden");

Object.keys(_Forbidden).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Forbidden[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Forbidden[key];
    }
  });
});

var _InvalidToken = require("./InvalidToken");

Object.keys(_InvalidToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InvalidToken[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _InvalidToken[key];
    }
  });
});

var _NotAuthenticate = require("./NotAuthenticate");

Object.keys(_NotAuthenticate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NotAuthenticate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NotAuthenticate[key];
    }
  });
});

var _NotSupport = require("./NotSupport");

Object.keys(_NotSupport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NotSupport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NotSupport[key];
    }
  });
});

var _NotFound = require("./NotFound");

Object.keys(_NotFound).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NotFound[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NotFound[key];
    }
  });
});