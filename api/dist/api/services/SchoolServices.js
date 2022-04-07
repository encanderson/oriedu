"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolServices = void 0;

var _repositories = require("../repositories");

class SchoolServices {
  static async update(userId, data) {
    const isSchool = await _repositories.SchoolRepository.isSchool(userId);

    if (!isSchool) {
      await _repositories.SchoolRepository.create(userId, data);
    } else {
      await _repositories.SchoolRepository.update(userId, data);
    }

    return isSchool;
  }

}

exports.SchoolServices = SchoolServices;