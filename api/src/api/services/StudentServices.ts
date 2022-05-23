import { Prisma } from "@prisma/client";

import { StudentRepository } from "../repositories";

import { Student, Docs } from "../../@types";
import { encryptString, filterOptions } from "../../utils";
import { setStudentNumber } from "../helpers";

export class StudentServices {
  static async create(form: Student): Promise<void> {
    const birthplace = {
      nationality: form.nationality,
      naturalness: form.naturalness,
    };

    form.birthplace = birthplace;

    const birthRegistration = {
      dateRegistration: form.dateRegistration,
      registerNumber: form.registerNumber,
      registry: form.registry,
    };

    const docs = filterOptions(form, ["cpf", "rg", "nis", "inep"]) as Docs;

    docs.birthRegistration = birthRegistration;

    form.docs = await encryptString(JSON.stringify(docs));

    const emergency = filterOptions(form, [
      "blood",
      "contact",
      "rhFactor",
      "securityHealth",
      "dietaryRestrictions",
      "medicationRestrictions",
    ]);

    const parents = form.parents as Prisma.JsonArray;
    const array = [];
    parents.forEach((item) => {
      const parent = filterOptions(item, [
        "name",
        "job",
        "workplace",
        "phone",
        "email",
        "schooling",
        "cpf",
        "rg",
      ]);

      array.push(parent);
    });

    form.emergency = await encryptString(JSON.stringify(emergency));

    form.parents = await encryptString(JSON.stringify(array));

    form.number = setStudentNumber(form.schoolNumber);

    await StudentRepository.create(form);
  }

  static async getAll(school_id: string): Promise<unknown> {
    const students = await StudentRepository.getAll(school_id);

    return students;
  }
}
