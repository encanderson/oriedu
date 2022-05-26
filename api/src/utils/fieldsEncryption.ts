import { Employee } from "../@types";

import { Crypto } from "../api/database";
import { InvalidField } from "../errors";

const fields = ["ethnic", "docs", "contacts", "address", "bank"];

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

export const encryptData = async (
  data: unknown,
  fields: string[]
): Promise<string> => {
  const encryption = new Crypto();
  const obj = {};
  for (let i = 0; i < fields.length; i += 1) {
    obj[fields[i]] = data[fields[i]];
  }

  const string = await encryption.encrypt(JSON.stringify(obj));

  return string;
};

export const decryptData = async (data: string): Promise<unknown> => {
  const encryption = new Crypto();

  const string = await encryption.decrypt(data);

  return JSON.parse(string);
};

export const encryptString = async (data: string): Promise<string> => {
  const encryption = new Crypto();

  const string = await encryption.encrypt(data);

  return string;
};

export const decryptString = async (data: string): Promise<string> => {
  const encryption = new Crypto();

  const string = await encryption.decrypt(data);

  return string;
};
