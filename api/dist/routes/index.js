"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _docs = require("./docs.routes");

var _admin = require("./admin.routes");

var _users = require("./users.routes");

var _user = require("./user.routes");

var _school = require("./school.routes");

var _class = require("./class.routes");

var _employee = require("./employee.routes");

var _student = require("./student.routes");

const routes = app => {
  app.use("/docs", _docs.router);
  app.use("/api/v1/admin", _admin.router);
  app.use("/api/v1", _users.router);
  app.use("/api/v1", _user.router);
  app.use("/api/v1", _school.router);
  app.use("/api/v1", _class.router);
  app.use("/api/v1", _employee.router);
  app.use("/api/v1", _student.router);
};

var _default = routes;
exports.default = _default;