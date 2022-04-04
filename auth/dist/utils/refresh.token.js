"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshToken = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _moment = _interopRequireDefault(require("moment"));

var _errors = require("../errors");

var _subscribers = require("../api/subscribers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RefreshToken {
  static async generateToken(data) {
    const expirationDate = (0, _moment.default)().add(3, "d").unix();

    const newRefreshToken = _crypto.default.randomBytes(24).toString("hex");

    await _subscribers.managerAllowlist.setKey(newRefreshToken, JSON.stringify(data), expirationDate);
    return {
      newRefreshToken,
      expirationDate
    };
  }

  static async verifyToken(refreshToken) {
    if (!refreshToken) {
      throw new _errors.InvalidToken("Refresh Token não informado");
    }

    const credentials = await _subscribers.managerAllowlist.getKey(refreshToken);

    if (!credentials) {
      throw new _errors.InvalidToken("Refresh Token inválido");
    }

    return credentials;
  }

  static async deleteToken(refreshToken) {
    await _subscribers.managerAllowlist.delete(refreshToken);
  }

  static async getUserId(refreshToken) {
    const userId = await _subscribers.managerAllowlist.getKey(refreshToken);
    return userId;
  }

} // userId, "15m"


exports.RefreshToken = RefreshToken;