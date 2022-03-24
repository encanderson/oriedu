"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthControllers = void 0;

var _services = require("../services");

class AuthControllers {
  static async confirmUser(req, res, next) {
    try {
      const token = req.params.token;
      await _services.AuthServices.confirmUser(token);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }

}

exports.AuthControllers = AuthControllers;