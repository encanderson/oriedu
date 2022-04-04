"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerSetup = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _middleware = require("./api/middleware");

var _logs = _interopRequireDefault(require("./logs"));

var _config = require("./config");

var _services = require("./api/services");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("express-async-errors");

require("./api/subscribers");

class ServerSetup {
  constructor() {
    this.app = (0, _express.default)();
  }

  async init() {
    this.setupExpress();
  }

  setupExpress() {
    this.app.use((0, _cors.default)(_config.config.corsOptions));
    (0, _services.initialize)(this.app);
    (0, _middleware.headersMiddleware)(this.app);
    this.app.use((0, _express.json)({
      limit: "50mb"
    }));
    this.app.use((0, _express.urlencoded)({
      extended: true,
      limit: "50mb"
    }));
    (0, _routes.default)(this.app);
    (0, _middleware.errorMiddleware)(this.app);
  }

  start(PORT) {
    this.httpServer = _http.default.createServer(this.app);
    this.httpServer.listen(PORT, () => {
      _logs.default.info(`Listening at ${PORT}`);
    });
  }

}

exports.ServerSetup = ServerSetup;