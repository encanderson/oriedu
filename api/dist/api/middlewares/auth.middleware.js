"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleware = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _errors = require("../../errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authMiddleware = async (req, res, next) => {
  try {
    _passport.default.authenticate("bearer", {
      session: false
    }, async (error, payload) => {
      if (!payload) {
        return res.status(401).send({
          message: new _errors.InvalidToken("Token ou Refresh Token Inválido").message
        });
      }

      if (error && error.name === "InvalidToken") {
        return res.status(401).send({
          message: error.message
        });
      }

      if (error && error.name === "NotFound") {
        return res.status(401).send({
          message: error.message
        });
      }

      if (error) {
        return res.status(500).send({
          message: error.message
        });
      }

      req.user = {
        userId: payload.userId,
        app: payload.app,
        id: payload.id
      };
      next();
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

exports.authMiddleware = authMiddleware;