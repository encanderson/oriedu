import express from "express";

import { router as userRouter } from "./users.routes";

const routes = (app: express.Application): void => {
  app.use("/api/v1", userRouter);
};

export default routes;
