import { Request, Response, NextFunction } from "express";

import { ClassServices } from "../services";

export class ClassControllers {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const classForm = req.body;

      const school_id = req.body.school_id;

      const permissions = req.access.permissions;

      await ClassServices.create(school_id, classForm, permissions);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const school_id = req.params.id;

      const classes = await ClassServices.get(school_id);
      res.status(200).send(classes);
    } catch (err) {
      next(err);
    }
  }
}
