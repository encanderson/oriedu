import express from "express";

import { router as docsRouter } from "./docs.routes";
import { router as adminRouter } from "./admin.routes";
import { router as usersRouter } from "./users.routes";
import { router as userRouter } from "./user.routes";
import { router as schoolRouter } from "./school.routes";
import { router as classRouter } from "./class.routes";

const routes = (app: express.Application): void => {
  app.use("/docs", docsRouter);
  app.use("/api/v1/admin", adminRouter);
  app.use("/api/v1", usersRouter);
  app.use("/api/v1", userRouter);
  app.use("/api/v1", schoolRouter);
  app.use("/api/v1", classRouter);
};

export default routes;
