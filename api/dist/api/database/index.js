"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redis = require("./redis");

Object.keys(_redis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _redis[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _redis[key];
    }
  });
});

var _Encrypt = require("./Encrypt");

Object.keys(_Encrypt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Encrypt[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Encrypt[key];
    }
  });
});

var _admin = require("./admin");

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

var _auth = require("./auth");

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

var _school = require("./school");

Object.keys(_school).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _school[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _school[key];
    }
  });
});