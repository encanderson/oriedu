import { Employee } from "../@types";

import { Crypto } from "../api/database";
import { InvalidField } from "../errors";

export const encryptEmployee = (employee: Employee): Employee => {
  const encryption = new Crypto();
  const fields = ["ethnic", "docs", "contacts", "address", "salary", "bank"];

  fields.forEach((item) => {
    if (employee[item]) {
      employee[item] = encryption.encrypt(JSON.stringify(employee[item]));
    } else {
      throw new InvalidField(`O campo ${item} não foi preenchido.`);
    }
  });

  return employee;
};
