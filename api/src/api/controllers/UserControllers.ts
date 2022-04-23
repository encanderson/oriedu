import { Request, Response, NextFunction } from "express";

import { UserServices } from "../services";

export class UserControllers {
  static async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_id } = req.user;

      const user = await UserServices.getUser(user_id);

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

      const { user_id } = req.user;

      const { password } = req.body;

      await UserServices.update(user_id, data, password);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
