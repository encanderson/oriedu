import express from "express";

import { EmployeeControllers } from "../api/controllers";

export const router = express.Router();

router.post("/school/:id/employees", EmployeeControllers.create);
router.get("/school/:id/employees", EmployeeControllers.getAll);
router.get("/school/:id/employees/:employee_id", EmployeeControllers.get);
