"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createdAt = void 0;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/pt-br");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment.default.locale("pt-br");

const createdAt = () => {
  return (0, _moment.default)().format();
};

exports.createdAt = createdAt;