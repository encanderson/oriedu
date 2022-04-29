import { Request, Response, NextFunction } from "express";

import { SchoolServices } from "../services";

export class SchoolControllers {
  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = req.body;

      await SchoolServices.update(data);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
