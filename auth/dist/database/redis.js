"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.managerList = void 0;

var _util = require("util");

var _errors = require("../errors");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const managerList = list => {
  const setAsync = (0, _util.promisify)(list.set).bind(list);
  const existsAsync = (0, _util.promisify)(list.exists).bind(list);
  const getAsync = (0, _util.promisify)(list.get).bind(list);
  const delAsync = (0, _util.promisify)(list.del).bind(list);
  return {
    async setKey(key, value, expiration) {
      await setAsync(key, value);
      list.expireat(key, expiration);
    },

    async getKey(key) {
      return getAsync(key);
    },

    async isKey(key) {
      const result = await existsAsync(key);
      return result === 1;
    },

    async delete(key) {
      if (!key) {
        throw new _errors.Forbidden("Refresh Token não encontrado");
      }

      await delAsync(key);
    }

  };
};

exports.managerList = managerList;