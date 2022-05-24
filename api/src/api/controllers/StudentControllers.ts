import { Request, Response, NextFunction } from "express";

import { StudentServices } from "../services";

export class StudentControllers {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const form = req.body;

      await StudentServices.create(form);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const school_id = req.query.school_id as string;

      const students = await StudentServices.getAll(school_id);

      res.status(200).send(students);
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
      const student_id = req.params.student_id;

      const student = await StudentServices.get(student_id);
      res.status(200).send(student);
    } catch (err) {
      next(err);
    }
  }
}
