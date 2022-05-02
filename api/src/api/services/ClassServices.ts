import { ClassRepository } from "../repositories";

import { ClassForm } from "../../@types";
import { filterPayload, sorterObj } from "../../utils";

export class ClassServices {
  static async create(
    school_id: string,
    form: ClassForm,
    permissions: { attributes: string[] }
  ): Promise<void> {
    const classForm = filterPayload(form, permissions.attributes) as ClassForm;

    await ClassRepository.create(school_id, classForm);
  }

  static async get(school_id: string): Promise<ClassForm[]> {
    const classes = await ClassRepository.get(school_id);

    const obj = sorterObj(classes, "class") as ClassForm[];

    return obj.reverse();
  }
}
