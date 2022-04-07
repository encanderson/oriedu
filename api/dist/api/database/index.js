"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require("./client");

Object.keys(_client).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _client[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _client[key];
    }
  });
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