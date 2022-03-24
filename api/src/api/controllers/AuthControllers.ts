import { Request, Response, NextFunction } from "express";

import { AuthServices } from "../services";

export class AuthControllers {
  static async confirmUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.params.token;

      await AuthServices.confirmUser(token);

      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}
