"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _config[key];
    }
  });
});

var _user = require("./user");

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _user[key];
    }
  });
});

var _error = require("./error");

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});

var _jwtPayload = require("./jwtPayload");

Object.keys(_jwtPayload).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jwtPayload[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jwtPayload[key];
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

var _profile = require("./profile");

Object.keys(_profile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _profile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _profile[key];
    }
  });
});

var _class = require("./class");

Object.keys(_class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _class[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _class[key];
    }
  });
});

var _employee = require("./employee");

Object.keys(_employee).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _employee[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _employee[key];
    }
  });
});

var _student = require("./student");

Object.keys(_student).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _student[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _student[key];
    }
  });
});

var _message = require("./message");

Object.keys(_message).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _message[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _message[key];
    }
  });
});