import { prisma } from "../database";

import { User, Profile } from "@src/@types";

import { createdAt, hashFunction, hashPassword } from "@src/utils";
import { UserExist, Forbidden } from "../../errors";

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
        user_id: hashFunction(newUser.cpf),
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
        user_id: hashFunction(this.user.cpf),
        email: this.user.email,
        code: code,
        password: password,
        createdAt: this.date,
        updatedAt: this.date,
        consents: this.user.consents,
      },
    });

    await prisma.profile.create({
      data: {
        user_id: hashFunction(this.user.cpf),
        name: this.user.name,
        job: this.user.job,
      },
    });
  }

  static async confirmUser(user_id: string): Promise<void> {
    try {
      await prisma.user.update({
        where: {
          user_id: user_id,
        },
        data: {
          active: true,
        },
      });
    } catch (err) {
      throw new Forbidden();
    }
  }

  static async getUser(user_id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        app: true,
        user_id: true,
        email: true,
        password: true,
      },
    });

    const profile = await prisma.profile.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        name: true,
        job: true,
        picture: true,
        school: {
          select: {
            contacts: true,
            address: true,
            cnpj: true,
            fantasia: true,
          },
        },
      },
    });

    const data = {
      ...user,
      name: profile.name,
      job: profile.job,
      picture: profile.picture,
      address: profile.school?.address,
      contacts: profile.school?.contacts,
      school: {
        cnpj: profile.school?.cnpj,
        fantasia: profile.school?.fantasia,
      },
    };

    return data;
  }

  static async update(user_id: string, data: Profile): Promise<void> {
    await prisma.profile.update({
      where: {
        user_id: user_id,
      },
      data: data,
    });
  }

  static async updatePassword(
    user_id: string,
    password: string
  ): Promise<void> {
    await prisma.user.update({
      where: {
        user_id: user_id,
      },
      data: {
        password: password,
        updatedAt: createdAt(),
      },
    });
  }
}
