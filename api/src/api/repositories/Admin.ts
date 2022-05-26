import { prisma } from "../database";

export class AdminRepository {
  static async create(user_id: string, password: string): Promise<void> {
    await prisma.admin.create({
      data: {
        user_id: user_id,
        password: password,
      },
    });
  }
}
