import express from "express";

import { SchoolControllers } from "../api/controllers";
import { authMiddleware } from "../api/middlewares";

export const router = express.Router();

router.put("/school", authMiddleware, SchoolControllers.update);
