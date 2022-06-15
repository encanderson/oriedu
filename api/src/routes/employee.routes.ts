import express from "express";

import { authMiddleware, AccessControlMiddleware } from "../api/middleware";
import { EmployeeControllers } from "../api/controllers";

export const router = express.Router();

router.post(
  "/school/:id/employees",
  [authMiddleware, AccessControlMiddleware.employees],
  EmployeeControllers.create
);
router.get(
  "/school/:id/employees",
  [authMiddleware, AccessControlMiddleware.employees],
  EmployeeControllers.getAll
);
router.get(
  "/school/:id/employees/:employee_id",
  [authMiddleware, AccessControlMiddleware.employees],
  EmployeeControllers.get
);
