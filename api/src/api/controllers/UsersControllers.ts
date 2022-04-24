import { Request, Response, NextFunction } from "express";

import { UsersServices } from "../services";

import { Crypto } from "../database";

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

  static async encryption(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = req.body;

      const encrypt = new Crypto();

      const test = await encrypt.encrypt(JSON.stringify(data));

      res.status(200).send({
        encrypt: test,
        decrypt: JSON.parse(await encrypt.decrypt(test)),
      });
    } catch (err) {
      next(err);
    }
  }
}
