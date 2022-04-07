"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolControllers = void 0;

var _services = require("../services");

class SchoolControllers {
  static async update(req, res, next) {
    try {
      const {
        userId
      } = req.user;
      const data = req.body;
      await _services.SchoolServices.update(userId, data);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

}

exports.SchoolControllers = SchoolControllers;