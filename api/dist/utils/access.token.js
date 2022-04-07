"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _errors = require("../errors");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AccessToken {
  static generateToken(data) {
    const token = _jsonwebtoken.default.sign({
      userId: data.userId,
      app: data.app,
      id: data.id
    }, _config.config.secretkey, {
      expiresIn: data.expires
    });

    return token;
  }

  static verifyToken(token) {
    try {
      const payload = _jsonwebtoken.default.verify(token, _config.config.secretkey);

      return payload;
    } catch (err) {
      throw new _errors.InvalidToken(err.message);
    }
  }

}

exports.AccessToken = AccessToken;