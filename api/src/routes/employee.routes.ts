import express from "express";

import { EmployeeControllers } from "../api/controllers";

export const router = express.Router();

router.post("/employee", EmployeeControllers.create);
