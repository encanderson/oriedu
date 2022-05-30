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
  PORT: 4000,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  corsOptions: {
    origin: ["http://oriedu.orianderson.com", "http://admin.orianderson.com:3000", "http://secretaria.orianderson.com:3000", "http://professor.orianderson.com:3000", "http://aluno.orianderson.com:3000"],
    "Access-Control-Allow-Credentials": true
  },
  allowlist: {
    prefix: "allowlist-refresh-token:"
  },
  blocklist: {
    prefix: "blocklist-access-token:"
  },
  url: "http://oriedu.orianderson.com",
  api: "http://localhost:4000/api/v1",
  awsAccessKeyId: process.env.AWS_ACCESS_KEY,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  kmsKeyId: process.env.AWS_KEY_ID
};
exports.config = config;

if (environment === "production") {
  exports.config = config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 4000,
    emailUser: process.env.EMAIL_USER_ZOHO,
    emailPass: process.env.EMAIL_PASS_ZOHO,
    emailServer: process.env.MAIL_SERVER_ZOHO,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: ["https://www.tiadidi.com.br", "https://admin.tiadidi.com.br", "https://secretaria.tiadidi.com.br", "https://professor.tiadidi.com.br", "https://aluno.tiadidi.com.br"],
      "Access-Control-Allow-Credentials": true
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
      host: "redis",
      port: 6379
    },
    blocklist: {
      prefix: "blocklist-access-token:",
      host: "redis",
      port: 6379
    },
    url: "https://www.tiadidi.com.br",
    api: "https://api.tiadidi.com.br/api/v1",
    awsAccessKeyId: process.env.AWS_ACCESS_KEY,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
    kmsKeyId: process.env.AWS_KEY_ID
  };
}