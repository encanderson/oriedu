import { Request, Response, NextFunction } from "express";

import { NotFound } from "../../errors";
import { prisma } from "../database";
import { comparePassword, hashFunction } from "../../utils";

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, password } = req.body;

    const user = await prisma.admin.findUnique({
      where: {
        user_id: hashFunction(userId),
      },
    });

    if (!user) {
      throw new NotFound("Usuário");
    }

    await comparePassword(password, user.password);

    next();
  } catch (err) {
    next(err);
  }
};
