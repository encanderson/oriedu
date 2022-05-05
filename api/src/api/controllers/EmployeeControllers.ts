import { Request, Response, NextFunction } from "express";

import { EmployeeServices } from "../services";

export class EmployeeControllers {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const school_id = req.params.id;

      const payload = req.body;

      await EmployeeServices.create(school_id, payload);
      res.status(200).send();
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
      const school_id = req.params.id;

      const employees = await EmployeeServices.getAll(school_id);

      res.status(200).send(employees);
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
      const employee_id = req.params.employee_id;

      const employee = await EmployeeServices.get(employee_id);
      res.status(200).send(employee);
    } catch (err) {
      next(err);
    }
  }
}
