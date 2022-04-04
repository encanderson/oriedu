"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _allowlistRefreshToken = require("./allowlist-refresh-token");

Object.keys(_allowlistRefreshToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _allowlistRefreshToken[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _allowlistRefreshToken[key];
    }
  });
});

var _blocklistAccessToken = require("./blocklist-access-token");

Object.keys(_blocklistAccessToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _blocklistAccessToken[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _blocklistAccessToken[key];
    }
  });
});