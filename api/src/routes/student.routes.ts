import express from "express";

import { StudentControllers } from "../api/controllers";

import { authMiddleware, AccessControlMiddleware } from "../api/middleware";

export const router = express.Router();

router.post(
  "/students",
  [authMiddleware, AccessControlMiddleware.students],
  StudentControllers.create
);
router.get(
  "/students/:student_id",
  [authMiddleware, AccessControlMiddleware.students],
  StudentControllers.get
);
