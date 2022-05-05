import { Users } from "../repositories";

import { Employee, User } from "../../@types";
import { filterForm } from "../validators";
import { userForm, employeeForm } from "../../config";
import { encryptEmployee, hashFunction } from "../../utils";
import { EmployeeRepository } from "../repositories/Employee";

async function filterAndCreateNewUser(data: Employee) {
  const userData = filterForm(data, userForm) as User;

  const user = await Users.searchUser(userData);

  const user_id = user.user_id;
  return { user_id, user };
}

async function filterAndCreateNewEmployee(
  data: Employee,
  user_id: string,
  form: string[]
) {
  const employee = filterForm(data, form) as Employee;

  const encrypted = await encryptEmployee(employee);

  encrypted.user_id = user_id;

  return encrypted;
}

export class EmployeeServices {
  static async create(school_id: string, data: Employee): Promise<void> {
    const job = data.job;

    if (job !== "Serviços Gerais") {
      data.app = job.toLowerCase();

      const { user_id, user } = await filterAndCreateNewUser(data);

      const employee = await filterAndCreateNewEmployee(data, user_id, [
        ...employeeForm,
        "classes",
        "qualifications",
      ]);

      user.create();
      employee.birthday = new Date();

      await EmployeeRepository.create(school_id, employee);
    } else {
      const user_id = hashFunction(data.cpf);

      const employee = await filterAndCreateNewEmployee(
        data,
        user_id,
        employeeForm
      );

      await EmployeeRepository.create(school_id, employee);
    }
  }
}
