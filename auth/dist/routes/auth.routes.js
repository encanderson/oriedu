"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../api/controllers");

var _middleware = require("../api/middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.router = router;
router.get("/auth/:token", _controllers.AuthControllers.confirmEmail);
router.post("/auth/login", _middleware.AuthMiddleware.signIn, _controllers.AuthControllers.signIn);
router.post("/auth/verify-user", _middleware.AuthMiddleware.authenticate, _controllers.AuthControllers.checkSignIn);
router.post("/auth/refresh-token", _middleware.AuthMiddleware.refreshToken, _controllers.AuthControllers.refreshAccessToken);
router.post("/auth/logout", _middleware.AuthMiddleware.authenticate, _controllers.AuthControllers.logout);
router.post("/auth/confirm-user", _controllers.AuthControllers.confirmUser);