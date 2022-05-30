"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = require("./headers.middleware");

Object.keys(_headers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _headers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _headers[key];
    }
  });
});

var _errors = require("./errors.middleware");

Object.keys(_errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errors[key];
    }
  });
});

var _auth = require("./auth.middleware");

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _auth[key];
    }
  });
});

var _accessControl = require("./access-control.middleware");

Object.keys(_accessControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _accessControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _accessControl[key];
    }
  });
});

var _admin = require("./admin.middleware");

Object.keys(_admin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _admin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _admin[key];
    }
  });
});