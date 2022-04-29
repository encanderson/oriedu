import { SchoolRepository } from "../repositories";

import { School } from "../../@types";

import { validateSchoolUpdate } from "../validators";

export class SchoolServices {
  static async update(data: School): Promise<void> {
    const school_id = data.school_id;

    const obj = validateSchoolUpdate(data) as School;

    if (obj) {
      await SchoolRepository.update(school_id, obj);
    }
  }
}
