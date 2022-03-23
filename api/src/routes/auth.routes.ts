import express from "express";

import { AuthControllers } from "../api/controllers";

export const router = express.Router();

router.get("/auth/:token", AuthControllers.confirmUser);
