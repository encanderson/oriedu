import express from "express";

import {
  SchoolControllers,
  StudentControllers,
  ClassControllers,
  AdminControllers,
} from "../api/controllers";
import { authMiddleware, AccessControlMiddleware } from "../api/middlewares";

export const router = express.Router();

router.put(
  "/school",
  [authMiddleware, AccessControlMiddleware.schools],
  SchoolControllers.update
);
router.get(
  "/school/:school_id",
  [authMiddleware, AccessControlMiddleware.students],
  StudentControllers.getAll
);
router.get(
  "/school/class/:id",
  [authMiddleware, AccessControlMiddleware.classes],
  ClassControllers.get
);
router.post("/questions", authMiddleware, AdminControllers.createMessage);
