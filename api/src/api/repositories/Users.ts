import { prisma } from "../database";

import { User } from "@src/@types";

import { createdAt, hashFunction, hashPassword } from "@src/utils";
import { UserExist, Forbidden } from "../errors";

export class Users {
  user: User;
  date: string;
  constructor(user: User) {
    this.date = createdAt();
    this.user = user;
  }

  static async searchUser(newUser: User): Promise<Users> {
    const user = await prisma.user.findUnique({
      where: {
        userId: hashFunction(newUser.cpf),
      },
      select: {
        app: true,
      },
    });

    const email = await prisma.user.findUnique({
      where: {
        email: newUser.email,
      },
      select: {
        app: true,
      },
    });

    if (user || email) {
      throw new UserExist();
    }

    return new Users(newUser);
  }

  async createUser(code: number): Promise<void> {
    const password = await hashPassword(this.user.password);

    await prisma.user.create({
      data: {
        active: false,
        app: this.user.app,
        job: this.user.job,
        userId: hashFunction(this.user.cpf),
        email: this.user.email,
        code: code,
        password: password,
        createdAt: this.date,
        updatedAt: this.date,
        consents: this.user.consents,
        profile: {
          create: {
            name: this.user.name,
          },
        },
      },
    });
  }

  static async confirmUser(userId: string): Promise<void> {
    try {
      await prisma.user.update({
        where: {
          userId: userId,
        },
        data: {
          active: true,
        },
      });
    } catch (err) {
      throw new Forbidden();
    }
  }
}
