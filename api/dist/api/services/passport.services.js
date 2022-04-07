"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportHttpBearer = require("passport-http-bearer");

var _utils = require("../../utils");

var _subscribers = require("../subscribers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_passport.default.use(new _passportHttpBearer.Strategy(async (token, done) => {
  try {
    await _subscribers.Blocklist.verifyToken(token);

    const payload = _utils.AccessToken.verifyToken(token);

    done(null, payload);
  } catch (err) {
    if (err.message === "jwt expired") {
      done(err, null);
    } else {
      done(err);
    }
  }
}));

const initialize = app => {
  app.use(_passport.default.initialize());
};

exports.initialize = initialize;