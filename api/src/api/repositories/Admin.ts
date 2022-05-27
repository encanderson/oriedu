import { prisma } from "../database";

import { Message } from "../../@types";
export class AdminRepository {
  static async create(user_id: string, password: string): Promise<void> {
    await prisma.admin.create({
      data: {
        user_id: user_id,
        password: password,
      },
    });
  }

  static async createQuestion(message: Message): Promise<void> {
    await prisma.questions.create({
      data: {
        email: message.email,
        name: message.name,
        school_id: message.school_id,
        subject: message.subject,
        message: message.message,
      },
    });
  }

  static async getMessages(): Promise<Message[]> {
    const messages = await prisma.questions.findMany();

    return messages;
  }
}
