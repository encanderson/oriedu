import http from "http";
import express, { json, urlencoded } from "express";
import cors from "cors";
require("express-async-errors");

import logger from "./logs";

import { Config } from "./@types";

import routes from "./routes";

import { headersMiddleware, errorMiddleware } from "./api/middlewares";

export class ServerSetup {
  httpServer: http.Server;
  app: express.Application;
  config: Config;

  constructor(config: Config) {
    this.config = config;
    this.app = express();
  }

  public async init(): Promise<void> {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(cors(this.config.corsOptions));

    headersMiddleware(this.app);

    this.app.use(
      json({
        limit: "50mb",
      })
    );

    this.app.use(
      urlencoded({
        extended: true,
        limit: "50mb",
      })
    );

    routes(this.app);

    errorMiddleware(this.app);
  }

  start(PORT: number): void {
    this.httpServer = http.createServer(this.app);

    this.httpServer.listen(PORT, () => {
      logger.info(`Listening at ${PORT}`);
    });
  }
}
