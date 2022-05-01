import { prisma } from "../database";

import { ClassForm } from "../../@types";

export class ClassRepository {
  static async create(school_id: string, form: ClassForm): Promise<void> {
    await prisma.class.create({
      data: {
        class: form.class,
        modality: form.modality,
        shift: form.shift,
        school_id: school_id,
      },
    });
  }

  static async get(school_id: string): Promise<ClassForm[]> {
    const classes = await prisma.class.findMany({
      where: {
        school_id: school_id,
      },
    });

    return classes;
  }
}
