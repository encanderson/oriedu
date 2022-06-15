"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable indent */
dotenv.config();
const redis = process.env.REDIS ? {
  allowlist: {
    prefix: process.env.ALLOWS_LIST,
    ...JSON.parse(process.env.REDIS)
  },
  blocklist: {
    prefix: process.env.BLOCK_LIST,
    ...JSON.parse(process.env.REDIS)
  }
} : {
  allowlist: {
    prefix: process.env.ALLOWS_LIST
  },
  blocklist: {
    prefix: process.env.BLOCK_LIST
  }
};
const config = {
  secretkey: process.env.SECRET_KEY,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  PORT: 4000,
  url: process.env.URL,
  corsOptions: {
    origin: JSON.parse(process.env.ALLOW_CORS),
    "Access-Control-Allow-Credentials": true
  },
  awsAccessKeyId: process.env.AWS_ACCESS_KEY,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  kmsKeyId: process.env.AWS_KEY_ID,
  root: process.env.ROOT,
  ...redis
};
exports.config = config;