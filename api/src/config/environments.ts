import * as dotenv from "dotenv";

import { Config } from "../@types";

dotenv.config();

const environment = process.env.NODE_ENV;

export let config: Config = {
  secretkey: process.env.SECRET_KEY,
  POSTGRESQL_URI: process.env.POSTGRESQL_URI,
  PORT: 4000,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  corsOptions: {
    origin: [
      "http://oriedu.orianderson.com",
      "http://secretaria.orianderson.com:3000",
    ],
    "Access-Control-Allow-Credentials": true,
  },
  allowlist: {
    prefix: "allowlist-refresh-token:",
  },
  blocklist: {
    prefix: "blocklist-access-token:",
  },
  url: "http://localhost:3002",
  api: "http://localhost:4000/api/v1",
};

if (environment === "production") {
  config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 4000,
    emailUser: process.env.EMAIL_USER_ZOHO,
    emailPass: process.env.EMAIL_PASS_ZOHO,
    emailServer: process.env.MAIL_SERVER_ZOHO,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: [
        "https://www.tiadidi.com.br",
        "https://secretaria.tiadidi.com.br",
      ],
      "Access-Control-Allow-Credentials": true,
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
      host: "redis",
      port: 6379,
    },
    blocklist: {
      prefix: "blocklist-access-token:",
      host: "redis",
      port: 6379,
    },
    url: "https://www.tiadidi.com.br",
    api: "https://api.tiadidi.com.br/api/v1",
  };
} else {
  config = {
    secretkey: process.env.SECRET_KEY,
    POSTGRESQL_URI: process.env.POSTGRESQL_URI,
    PORT: 4000,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailServer: process.env.MAIL_SERVER,
    geobingKey: process.env.GEOBING_KEY,
    corsOptions: {
      origin: [
        "http://oriedu.orianderson.com",
        "http://secretaria.orianderson.com:3000",
      ],
      "Access-Control-Allow-Credentials": true,
    },
    allowlist: {
      prefix: "allowlist-refresh-token:",
    },
    blocklist: {
      prefix: "blocklist-access-token:",
    },
    url: "http://localhost:3002",
    api: "http://localhost:4000/api/v1",
  };
}
