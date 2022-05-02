import { Request, Response, NextFunction } from "express";

import { accessController } from "../validators";
import { Forbidden } from "../../errors";

export class AccessControlMiddleware {
  static async classes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const permissions = accessController
        .can(req.user.app)
        .createAny("classes");

      if (permissions.granted === false) {
        next(new Forbidden());
      }

      req.access = {
        permissions: permissions,
      };
      next();
    } catch (err) {
      next(err);
    }
  }
}
