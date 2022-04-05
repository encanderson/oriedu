import express from "express";

import { SchoolControllers } from "../api/controllers";
import { authMiddleware } from "../api/middlewares";

export const router = express.Router();

router.post("/school", authMiddleware, SchoolControllers.update);
