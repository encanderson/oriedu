import { prisma } from "../database";

import { School } from "../../@types";

export class SchoolRepository {
  static async isSchool(user_id: string): Promise<boolean> {
    const isSchool = await prisma.profile.findUnique({
      where: {
        user_id: user_id,
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

  static async create(user_id: string, data: School): Promise<void> {
    await prisma.school.create({
      data: {
        address: data.address,
        city: data.address.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        // logo: data.logo,
        state: data.address.state,
        user_id: user_id,
      },
    });
  }

  static async update(user_id: string, data: School): Promise<void> {
    await prisma.school.update({
      where: {
        user_id: user_id,
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
