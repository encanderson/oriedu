import { Employee } from "../@types";

import { Crypto } from "../api/database";
import { InvalidField } from "../errors";

export const encryptEmployee = async (
  employee: Employee
): Promise<Employee> => {
  const encryption = new Crypto();
  const fields = ["ethnic", "docs", "contacts", "address", "salary", "bank"];

  for (let i = 0; i < fields.length; i += 1) {
    if (employee[fields[i]]) {
      employee[fields[i]] = await encryption.encrypt(
        JSON.stringify(employee[fields[i]])
      );
    } else {
      throw new InvalidField(`O campo ${fields[i]} não foi preenchido.`);
    }
  }

  return employee;
};
