"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersControllers = require("./UsersControllers");

Object.keys(_UsersControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UsersControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UsersControllers[key];
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

var _UserControllers = require("./UserControllers");

Object.keys(_UserControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UserControllers[key];
    }
  });
});

var _SchoolControllers = require("./SchoolControllers");

Object.keys(_SchoolControllers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SchoolControllers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SchoolControllers[key];
    }
  });
});