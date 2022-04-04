"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _docs = require("./docs.routes");

var _auth = require("./auth.routes");

var _update = require("./update.routes");

const routes = app => {
  app.use("/docs", _docs.router);
  app.use("/api/v1", _auth.router);
  app.use("/api/v1", _update.router);
};

var _default = routes;
exports.default = _default;