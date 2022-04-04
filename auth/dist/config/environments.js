"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

dotenv.config();
const environment = process.env.NODE_ENV;
let config = {
  secretkey: process.env.SECRET_KEY,
  POSTGRESQL_URI: process.env.POSTGRESQL_URI,
  PORT: 7000,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  corsOptions: {
    origin: "*",
    "Access-Control-Allow-Credentials": true
  },
  allowlist: {
    prefix: "allowlist-refresh-token:"
  },
  blocklist: {
    prefix: "blocklist-access-token:"
  },
  url: "http://oriedu.orianderson.com",
  root: "./src"
};
exports.config = config;

if (environment === "production") {
  exports.config = config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 6000,
    emailUser: process.env.EMAIL_USER_ZOHO,
    emailPass: process.env.EMAIL_PASS_ZOHO,
    emailServer: process.env.MAIL_SERVER_ZOHO,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: ["https://www.tiadidi.com.br", "https://secretaria.tiadidi.com.br"],
      "Access-Control-Allow-Credentials": true
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
      url: "redis://redis:6379"
    },
    blocklist: {
      prefix: "blocklist-access-token:",
      url: "redis://redis:6379"
    },
    url: "http://www.tiadidi.com.br",
    root: "./dist"
  };
} else {
  exports.config = config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 7000,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailServer: process.env.MAIL_SERVER,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: "*",
      "Access-Control-Allow-Credentials": true
    },
    allowlist: {
      prefix: "allowlist-refresh-token:"
    },
    blocklist: {
      prefix: "blocklist-access-token:"
    },
    url: "http://oriedu.orianderson.com",
    root: "./src"
  };
}