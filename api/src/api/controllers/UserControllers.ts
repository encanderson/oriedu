import { Request, Response, NextFunction } from "express";

import { UserServices } from "../services";

export class UserControllers {
  static async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req.user;

      const user = await UserServices.getUser(userId);

      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }

  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = req.body;

      const { userId } = req.user;

      await UserServices.update(userId, data);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
