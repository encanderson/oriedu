import { prisma } from "../database";

import { Student } from "../../@types";

export class StudentRepository {
  static async create(form: Student): Promise<void> {
    const parents = form.parents as string;
    await prisma.student.create({
      data: {
        birthday: form.birthday,
        birthplace: form.birthplace,
        docs: form.docs,
        emergency: form.emergency,
        ethnic: form.ethnic,
        gender: form.gender,
        name: form.name,
        number: form.number,
        parents: parents,
        social_program: form.socialProgram,
        class_id: form.classId,
        history: form.history,
        fee: Number(form.fee),
        go_home_alone: form.goHomeAlone,
        school_id: form.school_id,
      },
    });
  }
  static async getAll(school_id: string): Promise<unknown> {
    const students = await prisma.student.findMany({
      where: {
        school_id: school_id,
      },
      select: {
        id: true,
        name: true,
        number: true,
        birthday: true,
        class: {
          select: {
            id: true,
            class: true,
            shift: true,
          },
        },
      },
    });

    return students;
  }
}
