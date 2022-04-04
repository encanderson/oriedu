"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headersMiddleware = void 0;

var _errors = require("../../errors");

var _config = require("../../config");

const headersMiddleware = app => {
  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "PHP/7.1.7");
    const applicationFormat = req.header("Accept");
    const docs = ["/docs", "/docs/swagger.json", "/favicon.ico"];

    if (_config.formatsAccepts.indexOf(applicationFormat) === -1 && docs.indexOf(req.originalUrl) === -1) {
      throw new _errors.NotSupport(applicationFormat);
    }

    res.setHeader("Content-Type", applicationFormat);
    res.setHeader("Access-Control-Expose-Headers", "Refresh-Token, Access-Token");
    next();
  });
};

exports.headersMiddleware = headersMiddleware;