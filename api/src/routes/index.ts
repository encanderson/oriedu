import express from "express";

import { router as docsRouter } from "./docs.routes";
import { router as usersRouter } from "./users.routes";
import { router as userRouter } from "./user.routes";

const routes = (app: express.Application): void => {
  app.use("/docs", docsRouter);
  app.use("/api/v1", usersRouter);
  app.use("/api/v1", userRouter);
};

export default routes;
