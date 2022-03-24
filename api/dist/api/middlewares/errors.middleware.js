"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMiddleware = void 0;

var _errors = require("../errors");

var _logs = _interopRequireDefault(require("../../logs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const errorMiddleware = app => {
  app.use( // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error, req, res, next) => {
    let status = 500;

    _logs.default.error(error.message);

    if (error instanceof _errors.NotFound) {
      status = 404;
    }

    if (error instanceof _errors.UserExist) {
      status = 409;
    }

    if (error instanceof _errors.NotSupport) {
      status = 406;
    }

    if (error instanceof _errors.NotAuthenticate || error instanceof _errors.InvalidToken) {
      status = 401;
    }

    if (error instanceof _errors.InvalidField) {
      status = 400;
    }

    if (error instanceof _errors.Forbidden) {
      status = 403;
    }

    if (error.message === "request entity too large") {
      return res.status(403).send({
        message: new _errors.ToLarge().message
      });
    }

    res.status(status).send({
      message: error.message
    });
  });
};

exports.errorMiddleware = errorMiddleware;