import { SchoolRepository } from "../repositories";

import { School } from "../../@types";

export class SchoolServices {
  static async update(user_id: string, data: School): Promise<boolean> {
    const isSchool = await SchoolRepository.isSchool(user_id);

    if (!isSchool) {
      await SchoolRepository.create(user_id, data);
    } else {
      await SchoolRepository.update(user_id, data);
    }
    return isSchool;
  }
}
