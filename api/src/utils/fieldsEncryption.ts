import { Employee } from "../@types";

import { Crypto } from "../api/database";
import { InvalidField } from "../errors";

const fields = ["ethnic", "docs", "contacts", "address", "salary", "bank"];

export const encryptEmployee = async (
  employee: Employee
): Promise<Employee> => {
  const encryption = new Crypto();

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

export const decryptEmployee = async (data: Employee): Promise<Employee> => {
  const decryption = new Crypto();

  for (let i = 0; i < fields.length; i += 1) {
    data[fields[i]] = JSON.parse(await decryption.decrypt(data[fields[i]]));
  }

  return data;
};
