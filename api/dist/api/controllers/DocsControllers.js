"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwagger = void 0;

const getSwagger = async (req, res) => {
  res.sendFile("swagger.json", {
    root: "./src/config"
  });
};

exports.getSwagger = getSwagger;