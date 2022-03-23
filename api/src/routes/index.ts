import express from "express";

import { router as userRouter } from "./users.routes";
import { router as authRouter } from "./auth.routes";

const routes = (app: express.Application): void => {
  app.use("/api/v1", userRouter);
  app.use("/api/v1", authRouter);
};

export default routes;
