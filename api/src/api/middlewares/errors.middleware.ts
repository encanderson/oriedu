import express, { Request, Response, NextFunction } from "express";

import {
  NotFound,
  UserExist,
  NotSupport,
  NotAuthenticate,
  InvalidToken,
  InvalidField,
  Forbidden,
  ToLarge,
} from "../errors";
import { ErrorType } from "@src/@types";

import logger from "../../logs";

export const errorMiddleware = (app: express.Application): void => {
  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (error: ErrorType, req: Request, res: Response, next: NextFunction) => {
      let status = 500;

      logger.error(error.message);

      if (error instanceof NotFound) {
        status = 404;
      }

      if (error instanceof UserExist) {
        status = 409;
      }

      if (error instanceof NotSupport) {
        status = 406;
      }

      if (error instanceof NotAuthenticate || error instanceof InvalidToken) {
        status = 401;
      }

      if (error instanceof InvalidField) {
        status = 400;
      }

      if (error instanceof Forbidden) {
        status = 403;
      }

      if (error.message === "request entity too large") {
        return res.status(403).send({ message: new ToLarge().message });
      }

      res.status(status).send({
        message: error.message,
      });
    }
  );
};
