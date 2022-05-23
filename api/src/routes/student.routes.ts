import express from "express";

import { StudentControllers } from "../api/controllers";

import { authMiddleware, AccessControlMiddleware } from "../api/middlewares";

export const router = express.Router();

router.post(
  "/students",
  [authMiddleware, AccessControlMiddleware.students],
  StudentControllers.create
);
