import { Request, Response, NextFunction } from "express";

import { AuthServices } from "../services";
import { config } from "@src/config";

export class AuthControllers {
  static async confirmUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.params.token;

      await AuthServices.confirmUser(token);

      res.status(301).redirect(config.url);
    } catch (err) {
      next(err);
    }
  }
}
