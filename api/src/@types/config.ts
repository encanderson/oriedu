export interface Config {
  secretkey: string;
  POSTGRESQL_URI?: string;
  PORT: number;
  emailUser: string;
  emailPass: string;
  emailServer: string;
  geobingKey: string;
  corsOptions: {
    origin: string[] | string;
    "Access-Control-Allow-Credentials": boolean;
  };
  allowlist: {
    prefix: string;
    host?: string;
    port?: number;
  };
  blocklist: {
    prefix: string;
    host?: string;
    port?: number;
  };
  url: string;
  api?: string;
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  awsRegion: string;
  kmsKeyId: string;
  root: string;
}
