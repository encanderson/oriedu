import { SchoolRepository } from "../repositories";

import { School } from "../../@types";

export class SchoolServices {
  static async update(data: School): Promise<void> {
    await SchoolRepository.update(data);
  }
}
