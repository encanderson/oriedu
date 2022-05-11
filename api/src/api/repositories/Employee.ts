import { prisma } from "../database";

import { Employee, EmployeeArray } from "../../@types";

export class EmployeeRepository {
  static async create(school_id: string, employee: Employee): Promise<void> {
    const job = employee.job;

    const data = {
      user_id: employee.user_id,
      name: employee.name,
      school_id: school_id,
      job: employee.job,
      address: employee.address,
      bank: employee.bank,
      birthday: employee.birthday,
      contacts: employee.contacts,
      contract: {
        hired: employee.hired,
      },
      docs: employee.docs,
      ethnic: employee.ethnic,
      gender: employee.gender,
      salary: employee.salary,
    };

    if (job !== "Professor") {
      await prisma.employee.create({
        data: data,
      });
    } else {
      const teacher = await prisma.employee.create({
        data: {
          ...data,
          qualifications: {
            course: employee.course,
            finished: employee.finished,
          },
        },
      });

      const employee_id = teacher.id;

      await prisma.teacher.create({
        data: {
          employee_id: employee_id,
          classes: employee.classes,
        },
      });
    }
  }

  static async getAll(school_id: string): Promise<EmployeeArray[]> {
    const employees = await prisma.employee.findMany({
      where: {
        school_id: school_id,
      },
      select: {
        id: true,
        name: true,
        job: true,
        birthday: true,
        user_id: true,
      },
    });

    return employees;
  }

  static async get(employee_id: string): Promise<unknown> {
    const employee = await prisma.employee.findUnique({
      where: {
        id: employee_id,
      },
      select: {
        id: true,
        name: true,
        job: true,
        birthday: true,
        address: true,
        bank: true,
        contacts: true,
        contract: true,
        docs: true,
        ethnic: true,
        gender: true,
        qualifications: true,
        salary: true,
        teacher: {
          select: {
            classes: true,
          },
        },
      },
    });

    return employee;
  }
}
