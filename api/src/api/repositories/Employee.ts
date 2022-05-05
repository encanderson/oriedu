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
        hired_at: employee.hired_at,
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
          qualifications: employee.qualifications,
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
      },
    });

    return employees;
  }

  static async get(employee_id: string): Promise<EmployeeArray> {
    const employee = await prisma.employee.findUnique({
      where: {
        id: employee_id,
      },
      select: {
        id: true,
        name: true,
        job: true,
        birthday: true,
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
