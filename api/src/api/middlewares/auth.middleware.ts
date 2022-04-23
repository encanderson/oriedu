import { Request, Response, NextFunction } from "express";
import passport from "passport";

import { InvalidToken } from "../../errors";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    passport.authenticate(
      "bearer",
      { session: false },
      async (error, payload) => {
        if (!payload) {
          return res.status(401).send({
            message: new InvalidToken("Token ou Refresh Token Inválido")
              .message,
          });
        }

        if (error && error.name === "InvalidToken") {
          return res.status(401).send({ message: error.message });
        }

        if (error && error.name === "NotFound") {
          return res.status(401).send({ message: error.message });
        }

        if (error) {
          return res.status(500).send({ message: error.message });
        }

        req.user = {
          user_id: payload.user_id,
          app: payload.app,
          id: payload.id,
        };
        next();
      }
    )(req, res, next);
  } catch (err) {
    next(err);
  }
};
