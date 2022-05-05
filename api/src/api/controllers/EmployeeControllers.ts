import { Request, Response, NextFunction } from "express";

import { EmployeeServices } from "../services";

export class EmployeeControllers {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const school_id = req.body.school_id;

      const payload = req.body;

      await EmployeeServices.create(school_id, payload);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}
