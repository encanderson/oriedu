import { prisma } from "../database";

import { School } from "../../@types";

export class SchoolRepository {
  static async isSchool(userId: string): Promise<boolean> {
    const isSchool = await prisma.profile.findUnique({
      where: {
        userId: userId,
      },
      select: {
        school: true,
      },
    });

    if (isSchool.school) {
      return true;
    }
    return false;
  }

  static async create(userId: string, data: School): Promise<void> {
    await prisma.school.create({
      data: {
        address: data.address,
        city: data.address.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        // logo: data.logo,
        state: data.address.state,
        userId: userId,
      },
    });
  }

  static async update(userId: string, data: School): Promise<void> {
    await prisma.school.update({
      where: {
        userId: userId,
      },
      data: {
        address: data.address,
        city: data.address.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        state: data.address.state,
        contacts: data.contacts,
      },
    });
  }
}
