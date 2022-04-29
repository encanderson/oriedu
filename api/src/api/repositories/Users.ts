import { prisma } from "../database";

import { User } from "@src/@types";

import { createdAt, hashFunction } from "@src/utils";
import { UserExist, Forbidden } from "../../errors";

export class Users {
  user: {
    app?: string;
    cpf?: string;
    email?: string;
    name?: string;
  };
  date: string;
  user_id: string;
  constructor(user: User) {
    this.date = createdAt();
    this.user = user;
    this.user_id = hashFunction(user.cpf);
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
      throw new UserExist("Usuário já registrado.");
    }

    return new Users(newUser);
  }

  async create(): Promise<void> {
    await prisma.user.create({
      data: {
        active: false,
        app: this.user.app,
        user_id: this.user_id,
        email: this.user.email,
        created_at: this.date,
        updated_at: this.date,
        consents: {},
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

    const profile = await prisma.employee.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        job: true,
        picture: true,
        name: true,
        school: {
          select: {
            id: true,
            address: true,
            contacts: true,
            cnpj: true,
            fantasia: true,
            modalities: true,
          },
        },
      },
    });

    const name = profile.name.split(" ");

    const data = {
      ...user,
      name: name[0] + " " + name[name.length - 1],
      job: profile.job,
      picture: profile.picture,
      school_id: profile.school.id,
      address: profile.school?.address,
      contacts: profile.school?.contacts,
      modalities: profile?.school.modalities,
      school: {
        cnpj: profile.school?.cnpj,
        fantasia: profile.school?.fantasia,
      },
    };

    return data;
  }

  static async update(user_id: string, data: User): Promise<void> {
    await prisma.employee.update({
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
        updated_at: createdAt(),
      },
    });
  }
}
