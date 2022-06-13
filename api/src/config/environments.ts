/* eslint-disable indent */
import * as dotenv from "dotenv";

import { Config } from "../@types";

dotenv.config();

const redis = process.env.REDIS
  ? {
      allowlist: {
        prefix: process.env.ALLOWS_LIST,
        ...JSON.parse(process.env.REDIS),
      },
      blocklist: {
        prefix: process.env.BLOCK_LIST,
        ...JSON.parse(process.env.REDIS),
      },
    }
  : {
      allowlist: {
        prefix: process.env.ALLOWS_LIST,
      },
      blocklist: {
        prefix: process.env.BLOCK_LIST,
      },
    };

export const config: Config = {
  secretkey: process.env.SECRET_KEY,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailServer: process.env.MAIL_SERVER,
  geobingKey: process.env.GEOBING_KEY,
  PORT: 4000,
  url: process.env.URL,
  corsOptions: {
    origin: JSON.parse(process.env.ALLOW_CORS),
    "Access-Control-Allow-Credentials": true,
  },
  awsAccessKeyId: process.env.AWS_ACCESS_KEY,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  kmsKeyId: process.env.AWS_KEY_ID,
  root: process.env.ROOT,
  ...redis,
};
