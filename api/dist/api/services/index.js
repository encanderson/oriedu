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

var _AdminServices = require("./AdminServices");

Object.keys(_AdminServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AdminServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AdminServices[key];
    }
  });
});

var _ClassServices = require("./ClassServices");

Object.keys(_ClassServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ClassServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ClassServices[key];
    }
  });
});

var _EmployeeServices = require("./EmployeeServices");

Object.keys(_EmployeeServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EmployeeServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EmployeeServices[key];
    }
  });
});

var _StudentServices = require("./StudentServices");

Object.keys(_StudentServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StudentServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StudentServices[key];
    }
  });
});