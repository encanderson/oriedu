import { InvalidField } from "../../errors";

export const filterForm = (obj: unknown, fields: string[]): unknown => {
  const newObj = {};
  fields.map((item) => {
    if (obj[item]) {
      return (newObj[item] = obj[item]);
    } else {
      throw new InvalidField(`Todos os campos devem ser preenchidos: ${item}`);
    }
  });

  return newObj;
};

export const validateSchoolUpdate = (obj: unknown): unknown => {
  const fields = ["address", "contacts", "modalities"];

  const newObj = {};

  fields.map((item) => {
    if (obj[item]) {
      return (newObj[item] = obj[item]);
    }
  });

  return newObj;
};
