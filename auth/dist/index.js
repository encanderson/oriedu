"use strict";

var _server = require("./server");

var _logs = _interopRequireDefault(require("./logs"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  try {
    const server = new _server.ServerSetup();
    await server.init();
    server.start(_config.config.PORT);
  } catch (error) {
    _logs.default.error(error);
  }
})();