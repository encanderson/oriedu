import express from "express";

import { AdminControllers } from "../api/controllers";

export const router = express.Router();

router.post("/school", AdminControllers.createSchoolAndAdminUser);

// TODO - Protect route
