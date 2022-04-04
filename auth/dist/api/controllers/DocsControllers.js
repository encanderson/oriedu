"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwagger = void 0;

var _config = require("../../config");

const getSwagger = async (req, res) => {
  res.sendFile("swagger.json", {
    root: _config.config.root + "/config"
  });
};

exports.getSwagger = getSwagger;