import express from "express";

import { UsersControllers } from "../api/controllers";

export const router = express.Router();

router.post("/users", UsersControllers.createUser);
router.post("/users/cripto", UsersControllers.encryption);
