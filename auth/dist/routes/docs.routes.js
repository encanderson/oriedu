"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _redocExpress = _interopRequireDefault(require("redoc-express"));

var _controllers = require("../api/controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.router = router;
router.get("/", (0, _redocExpress.default)({
  title: "API",
  specUrl: "/docs/swagger.json"
}));
router.get("/swagger.json", _controllers.getSwagger);