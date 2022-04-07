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

var _passport = require("./passport.services");

Object.keys(_passport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _passport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _passport[key];
    }
  });
});

var _UsersServices = require("./UsersServices");

Object.keys(_UsersServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UsersServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UsersServices[key];
    }
  });
});

var _SchoolServices = require("./SchoolServices");

Object.keys(_SchoolServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SchoolServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SchoolServices[key];
    }
  });
});