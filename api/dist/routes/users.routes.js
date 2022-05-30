"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../api/controllers");

var _middlewares = require("../api/middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.router = router;
router.post("/users", _middlewares.AccessControlMiddleware.users, _controllers.UsersControllers.createUser);