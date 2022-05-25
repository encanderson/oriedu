import express from "express";

import { authMiddleware, AccessControlMiddleware } from "../api/middlewares";

import { ClassControllers } from "../api/controllers";

export const router = express.Router();

router.post(
  "/class",
  [authMiddleware, AccessControlMiddleware.classes],
  ClassControllers.create
);

router.get(
  "/class/:id",
  [authMiddleware, AccessControlMiddleware.students],
  ClassControllers.getClass
);
