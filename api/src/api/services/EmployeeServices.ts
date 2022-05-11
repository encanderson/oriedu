import { Users } from "../repositories";

import { Employee, User, EmployeeArray } from "../../@types";
import { filterForm } from "../validators";
import { userForm, employeeForm } from "../../config";
import {
  encryptEmployee,
  hashFunction,
  sorterObj,
  decryptEmployee,
} from "../../utils";
import { removeObject } from "../helpers";
import { EmployeeRepository } from "../repositories/Employee";

async function filterAndCreateNewUser(data: Employee) {
  const userData = filterForm(data, userForm) as User;

  const user = await Users.searchUser(userData);

  const user_id = user.user_id;
  return { user_id, user };
}

async function filterAndCreateNewEmployee(
  data: Employee | unknown,
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

    const address = filterForm(data, [
      "street",
      "number",
      "zip",
      "district",
      "city",
      "state",
    ]);

    address["complemento"] = data?.complemento;

    const bank = filterForm(data, ["bank", "agency", "count", "salary"]);
    const contacts = filterForm(data, ["email", "phone"]);
    const docs = filterForm(data, ["cpf", "rg"]);

    const obj = {
      address: address,
      bank: bank,
      name: data.name,
      job: job,
      birthday: data.birthday,
      contacts: contacts,
      hired: data.hired,
      docs: docs,
      ethnic: data.ethnic,
      gender: data.gender,
      salary: data.salary,
    };

    if (job !== "Serviços Gerais") {
      data.app = job.toLowerCase();

      const { user_id, user } = await filterAndCreateNewUser(data);

      let employee;
      if (job === "Professor") {
        employee = await filterAndCreateNewEmployee(
          {
            ...obj,
            classes: data.classes,
          },
          user_id,
          [...employeeForm, "classes"]
        );
      } else {
        employee = await filterAndCreateNewEmployee(obj, user_id, employeeForm);
      }

      user.create();

      await EmployeeRepository.create(school_id, employee);
    } else {
      const user_id = hashFunction(data.cpf);

      const employee = await filterAndCreateNewEmployee(
        obj,
        user_id,
        employeeForm
      );

      await EmployeeRepository.create(school_id, employee);
    }
  }

  static async getAll(
    user_id: string,
    school_id: string
  ): Promise<EmployeeArray[]> {
    const employees = await EmployeeRepository.getAll(school_id);

    const obj = sorterObj(employees, "name") as EmployeeArray[];

    removeObject(obj, user_id);

    return obj.reverse();
  }

  static async get(employee_id: string): Promise<Employee> {
    const employee = (await EmployeeRepository.get(employee_id)) as Employee;

    await decryptEmployee(employee);

    return employee;
  }
}
