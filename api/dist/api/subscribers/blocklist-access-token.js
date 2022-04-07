"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blocklist = void 0;

var redis = _interopRequireWildcard(require("redis"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _database = require("../database");

var _utils = require("../../utils");

var _errors = require("../../errors");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const blocklist = redis.createClient(_config.config.blocklist);
const managerBlocklist = (0, _database.managerList)(blocklist);

class Blocklist {
  static async setToken(token) {
    const tokenHash = (0, _utils.hashFunction)(token);

    const {
      exp
    } = _jsonwebtoken.default.decode(token);

    await managerBlocklist.setKey(tokenHash, "", exp);
  }

  static async verifyToken(token) {
    const tokenHash = (0, _utils.hashFunction)(token);
    const check = await managerBlocklist.isKey(tokenHash);

    if (check) {
      throw new _errors.InvalidToken("Token inválidado.");
    }
  }

  static async delete(token) {
    await managerBlocklist.delete(token);
  }

}

exports.Blocklist = Blocklist;