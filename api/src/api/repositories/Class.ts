import { school as db } from "../database";

import { ClassForm } from "../../@types";

export class ClassRepository {
  static async create(school_id: string, form: ClassForm): Promise<void> {
    await db.class.create({
      data: {
        class: form.class,
        modality: form.modality,
        shift: form.shift,
        school_id: school_id,
        subjects: form.subjects,
      },
    });
  }

  static async get(school_id: string): Promise<ClassForm[]> {
    const classes = await db.class.findMany({
      where: {
        school_id: school_id,
      },
    });

    return classes;
  }

  static async getClass(class_id: string): Promise<ClassForm> {
    const turma = (await db.class.findUnique({
      where: {
        id: class_id,
      },
      select: {
        id: true,
        modality: true,
        class: true,
        shift: true,
        subjects: true,
        students: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })) as ClassForm;

    const teachers =
      (await db.$queryRaw`SELECT employee_id FROM teachers WHERE ${class_id} = ANY(classes)`) as {
        employee_id: string;
      }[];

    const obj = [];
    if (teachers.length) {
      for (let i = 0; i < teachers.length; i += 1) {
        const employee = await db.employee.findUnique({
          where: {
            id: teachers[i].employee_id,
          },
          select: {
            id: true,
            name: true,
            job: true,
          },
        });
        obj.push(employee);
      }
    }

    turma.teachers = obj;

    return turma;
  }
}
