"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthControllers = void 0;

var _services = require("../services");

var _utils = require("../../utils");

class AuthControllers {
  static async confirmEmail(req, res, next) {
    try {
      const token = req.params.token;
      await _services.AuthServices.confirmEmail(token);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async signIn(req, res, next) {
    try {
      res.status(200).send(req.user);
    } catch (err) {
      next(err);
    }
  }

  static async checkSignIn(req, res, next) {
    try {
      const {
        code
      } = req.body;
      const user = await _services.AuthServices.checkSignIn(req.user, code);
      (0, _utils.setHeaderTokens)(res, user);
      res.status(200).send({
        message: "Seja bem vindo de volta."
      });
    } catch (err) {
      next(err);
    }
  }

  static async refreshAccessToken(req, res, next) {
    try {
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async logout(req, res, next) {
    try {
      const {
        accessToken,
        refreshToken
      } = (0, _utils.getTokens)(req);
      await _services.AuthServices.logout(accessToken, refreshToken);
      res.setHeader("Access-Token", "");
      res.setHeader("Refresh-Token", "");
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async confirmUser(req, res, next) {
    try {
      const {
        code,
        token
      } = req.body;
      const accessToken = await _services.AuthServices.confirmUser(token, Number(code));
      res.status(200).send({
        token: accessToken
      });
    } catch (err) {
      next(err);
    }
  }

}

exports.AuthControllers = AuthControllers;