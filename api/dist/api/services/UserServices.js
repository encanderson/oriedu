"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserServices = void 0;

var _repositories = require("../repositories");

var _utils = require("../../utils");

var _config = require("../../config");

class UserServices {
  static async getUser(user_id) {
    const user = await _repositories.Users.getUser(user_id);
    delete user.password;
    return user;
  }

  static async update(user_id, data, actualPassword) {
    if (!actualPassword) {
      const obj = (0, _utils.filterProfile)(data, _config.profileUpdate);
      await _repositories.Users.update(user_id, obj);
    } else {
      const {
        password
      } = await _repositories.Users.getUser(user_id);
      await (0, _utils.comparePassword)(actualPassword, password);
      await _repositories.Users.updatePassword(user_id, await (0, _utils.hashPassword)(data.newPassword));
    }
  }

}

exports.UserServices = UserServices;