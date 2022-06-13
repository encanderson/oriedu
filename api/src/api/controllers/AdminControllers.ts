import { Request, Response, NextFunction } from "express";

import { AdminServices } from "../services";

export class AdminControllers {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { cpf, password } = req.body;

      await AdminServices.create(cpf, password);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  static async createSchoolAndAdminUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const form = req.body;

      await AdminServices.createSchoolAndAdminUser(form);
      res.status(200).send({
        message: "Um email de confirmação foi enviado ao usuário.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async contact(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const msg = req.body;

      await AdminServices.contact(msg);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async createMessage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const message = req.body;

      await AdminServices.createMessage(message);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async getMessages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const messages = await AdminServices.getMessages();
      res.status(200).send(messages);
    } catch (err) {
      next(err);
    }
  }
}
