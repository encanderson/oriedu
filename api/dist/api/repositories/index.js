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

var _School = require("./School");

Object.keys(_School).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _School[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _School[key];
    }
  });
});

var _Class = require("./Class");

Object.keys(_Class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Class[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Class[key];
    }
  });
});

var _Student = require("./Student");

Object.keys(_Student).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Student[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Student[key];
    }
  });
});

var _Admin = require("./Admin");

Object.keys(_Admin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Admin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Admin[key];
    }
  });
});