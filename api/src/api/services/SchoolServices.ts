import { SchoolRepository } from "../repositories";

import { School } from "../../@types";

export class SchoolServices {
  static async update(userId: string, data: School): Promise<boolean> {
    const isSchool = await SchoolRepository.isSchool(userId);

    if (!isSchool) {
      await SchoolRepository.create(userId, data);
    } else {
      await SchoolRepository.update(userId, data);
    }
    return isSchool;
  }
}
