"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthMiddleware = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _utils = require("../../utils");

var _errors = require("../../errors");

var _subscribers = require("../subscribers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthMiddleware {
  static async signIn(req, res, next) {
    _passport.default.authenticate("local", {
      session: false
    }, (error, user) => {
      if (error && error.name === "NotAuthenticate") {
        return res.status(401).send({
          message: error.message
        });
      }

      if (error && error.name === "NotFound") {
        return res.status(404).send({
          message: error.message
        });
      }

      if (error) {
        return res.status(500).send({
          message: error.message
        });
      }

      if (!user) {
        return res.status(401).send({
          message: "Acesso negado."
        });
      }

      const token = _utils.AccessToken.generateToken({
        userId: user.userId,
        expires: "3m",
        app: user.app,
        id: user.id
      });

      delete user.userId;
      req.user = { ...user,
        token
      };
      next();
    })(req, res, next);
  }

  static async authenticate(req, res, next) {
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
  }

  static async refreshToken(req, res, next) {
    try {
      await (0, _utils.setNewCredentials)(req, res);
      next();
    } catch (err) {
      next(err);
    }
  }

  static async confirmUser(req, res, next) {
    const token = req.body.token;

    try {
      await _subscribers.Blocklist.verifyToken(token);
      next();
    } catch (err) {
      next(err);
    }
  }

}

exports.AuthMiddleware = AuthMiddleware;