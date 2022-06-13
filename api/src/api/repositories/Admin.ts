import { admin as db } from "../database";

import { Message } from "../../@types";
export class AdminRepository {
  static async create(user_id: string, password: string): Promise<void> {
    await db.admin.create({
      data: {
        user_id: user_id,
        password: password,
      },
    });
  }

  static async createQuestion(message: Message): Promise<void> {
    await db.questions.create({
      data: {
        email: message.email,
        name: message.name,
        subject: message.subject,
        message: message.message,
        user_id: message.user_id,
        system: "oriedu",
      },
    });
  }

  static async getMessages(): Promise<Message[]> {
    const messages = await db.questions.findMany();

    return messages;
  }
}
