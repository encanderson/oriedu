import { prisma } from "../database";

import { School, User } from "../../@types";
import { UserExist } from "../../errors";
import { createdAt } from "@src/utils";

export class SchoolRepository {
  school: School;
  date: string;
  constructor(school: School) {
    this.date = createdAt();
    this.school = school;
  }

  static async searchSchool(newSchool: School): Promise<SchoolRepository> {
    const school = await prisma.school.findUnique({
      where: {
        cnpj: newSchool.cnpj,
      },
    });

    if (school) {
      throw new UserExist("Escola já foi registrada.");
    }

    return new SchoolRepository(newSchool);
  }

  async create(user: User, register: number): Promise<void> {
    try {
      await prisma.employee.create({
        data: {
          user_id: user.user_id,
          name: user.user.name,
          school: {
            create: {
              register: register,
              address: this.school.address,
              cnpj: this.school.cnpj,
              fantasia: this.school.fantasia,
              contacts: {
                email: this.school.email,
                phone: this.school.phone,
              },
            },
          },
        },
      });
    } catch (err) {
      throw new UserExist("Escola já possui registro");
    }
  }

  static async update(data: School): Promise<void> {
    await prisma.school.update({
      where: {
        id: data.school_id,
      },
      data: {
        address: data.address,
        contacts: data.contacts,
      },
    });
  }
}
