import { Request, Response, NextFunction } from "express";

import { UsersServices } from "../services";

export class UsersControllers {
  static async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newUser = req.body;

      await UsersServices.createUser(newUser);

      res.status(201).send({
        message: "Seja bem vindo, verifique o seu email.",
      });
    } catch (err) {
      next(err);
    }
  }
}
