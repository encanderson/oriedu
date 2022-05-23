import express from "express";

import { SchoolControllers, StudentControllers } from "../api/controllers";
import { authMiddleware, AccessControlMiddleware } from "../api/middlewares";

export const router = express.Router();

router.put("/school", authMiddleware, SchoolControllers.update);
router.get(
  "/school/:school_id",
  [authMiddleware, AccessControlMiddleware.students],
  StudentControllers.getAll
);
