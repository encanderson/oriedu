"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateControllers = void 0;

var _services = require("../services");

class UpdateControllers {
  static async verifyUser(req, res, next) {
    try {
      const cpf = req.body.cpf;
      const token = await _services.UpdateServices.verifyUser(cpf);
      res.status(200).send({
        token: token
      });
    } catch (err) {
      next(err);
    }
  }

  static async updatePassword(req, res, next) {
    try {
      const {
        password,
        token
      } = req.body;
      await _services.UpdateServices.updatePassword(password, token);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async updateEmail(req, res, next) {
    try {
      const {
        email,
        token
      } = req.body;
      await _services.UpdateServices.updateEmail(email, token);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

}

exports.UpdateControllers = UpdateControllers;