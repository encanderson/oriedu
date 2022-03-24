"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = require("./users.routes");

var _auth = require("./auth.routes");

const routes = app => {
  app.use("/api/v1", _users.router);
  app.use("/api/v1", _auth.router);
};

var _default = routes;
exports.default = _default;