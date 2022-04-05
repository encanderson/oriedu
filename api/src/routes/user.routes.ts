import express from "express";

import { UserControllers } from "../api/controllers";
import { authMiddleware } from "../api/middlewares";

export const router = express.Router();

router.get("/user", authMiddleware, UserControllers.getUser);
router.put("/user", authMiddleware, UserControllers.update);
