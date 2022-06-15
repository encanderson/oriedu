import express from "express";

import { UsersControllers } from "../api/controllers";
import { AccessControlMiddleware } from "../api/middleware";

export const router = express.Router();

router.post(
  "/users",
  AccessControlMiddleware.users,
  UsersControllers.createUser
);
