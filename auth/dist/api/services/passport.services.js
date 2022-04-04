"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _passportHttpBearer = require("passport-http-bearer");

var _repositories = require("../repositories");

var _utils = require("../../utils");

var _subscribers = require("../subscribers");

var _models = require("../models");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_passport.default.use(new _passportLocal.Strategy({
  usernameField: "cpf",
  passwordField: "password"
}, async (cpf, password, done) => {
  try {
    const user = await _repositories.AuthRepository.verifyUser((0, _utils.hashFunction)(cpf));
    await (0, _utils.comparePassword)(password, user.password);
    delete user.password;
    const code = (0, _utils.generateCode)();
    await (0, _.sendEmail)(user.email, "Código de Verificação", (0, _models.htmlVerify)(code));
    await _repositories.AuthRepository.update((0, _utils.hashFunction)(cpf), {
      code: code
    });
    done(null, {
      app: user.app,
      userId: (0, _utils.hashFunction)(cpf),
      id: user.id
    });
  } catch (err) {
    done(err);
  }
}));

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