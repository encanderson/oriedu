import { Request, Response, NextFunction } from "express";

import { SchoolServices } from "../services";

export class SchoolControllers {
  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_id } = req.user;

      const data = req.body;

      await SchoolServices.update(user_id, data);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
