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

    if (isSchool) {
      return true;
    }
    return false;
  }

  static async create(data: School, userId: string): Promise<void> {
    await prisma.school.create({
      data: {
        address: data.address,
        city: data.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        logo: data.logo,
        state: data.state,
        userId: userId,
      },
    });
  }

  static async update(data: School): Promise<void> {
    await prisma.school.update({
      where: {
        id: data.id,
      },
      data: {
        address: data.address,
        city: data.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        logo: data.logo,
        state: data.state,
      },
    });
  }
}
