import express from "express";

import { AdminControllers } from "../api/controllers";
import { adminMiddleware } from "../api/middlewares";

export const router = express.Router();

// router.post("", adminMiddleware, AdminControllers.create);
router.post(
  "/school",
  adminMiddleware,
  AdminControllers.createSchoolAndAdminUser
);
router.post("/contact", AdminControllers.contact);
