import { Request, Response } from "express";

import { UsersServices } from "../services";

export class UsersControllers {
  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = req.body;

      await UsersServices.createUser(newUser);

      res.status(201).end();
    } catch (err) {
      res.status(500).send({
        message: "We get a trouble in our server, please, try again.",
      });
    }
  }
}
