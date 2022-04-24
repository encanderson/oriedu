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

  async create(user: User): Promise<void> {
    await prisma.employee.create({
      data: {
        user_id: user.user_id,
        name: user.user.name,
        school: {
          create: {
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
  }

  static async isSchool(user_id: string): Promise<void> {
    console.log(user_id);
    // const isSchool = await prisma.profile.findUnique({
    //   where: {
    //     user_id: user_id,
    //   },
    //   select: {
    //     school: true,
    //   },
    // });

    // if (isSchool.school) {
    //   return true;
    // }
    // return false;
  }

  static async update(user_id: string, data: School): Promise<void> {
    console.log(user_id, data);
    // await prisma.school.update({
    //   where: {
    //     user_id: user_id,
    //   },
    //   data: {
    //     address: data.address,
    //     city: data.address.city,
    //     cnpj: data.cnpj,
    //     fantasia: data.fantasia,
    //     state: data.address.state,
    //     contacts: data.contacts,
    //   },
    // });
  }
}
