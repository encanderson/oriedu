"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

const {
  combine,
  timestamp,
  label,
  prettyPrint
} = _winston.format;
const logger = (0, _winston.createLogger)({
  format: combine(timestamp(), prettyPrint(), label({
    label: "right meow!"
  })),
  transports: [new _winston.transports.Console(), new _winston.transports.File({
    filename: "./src/logs/server.log"
  })]
});
var _default = logger;
exports.default = _default;