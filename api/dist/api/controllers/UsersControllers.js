"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersControllers = void 0;

var _services = require("../services");

class UsersControllers {
  static async createUser(req, res, next) {
    try {
      const newUser = req.body;
      await _services.UsersServices.createUser(newUser);
      res.status(201).send({
        message: "Seja bem vindo, verifique o seu email."
      });
    } catch (err) {
      next(err);
    }
  }

}

exports.UsersControllers = UsersControllers;