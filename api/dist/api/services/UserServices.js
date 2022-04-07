"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserServices = void 0;

var _repositories = require("../repositories");

var _utils = require("../../utils");

class UserServices {
  static async getUser(userId) {
    const user = await _repositories.Users.getUser(userId);
    delete user.password;
    return user;
  }

  static async update(userId, data, actualPassword) {
    if (!actualPassword) {
      const obj = (0, _utils.filterProfile)(data);
      await _repositories.Users.update(userId, obj);
    } else {
      const {
        password
      } = await _repositories.Users.getUser(userId);
      await (0, _utils.comparePassword)(actualPassword, password);
      await _repositories.Users.updatePassword(userId, await (0, _utils.hashPassword)(data.newPassword));
    }
  }

}

exports.UserServices = UserServices;