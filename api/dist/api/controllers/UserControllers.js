"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserControllers = void 0;

var _services = require("../services");

class UserControllers {
  static async getUser(req, res, next) {
    try {
      const {
        userId
      } = req.user;
      const user = await _services.UserServices.getUser(userId);
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const data = req.body;
      const {
        userId
      } = req.user;
      const {
        password
      } = req.body;
      await _services.UserServices.update(userId, data, password);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

}

exports.UserControllers = UserControllers;