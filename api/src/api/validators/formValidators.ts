import { InvalidField } from "../../errors";

export const filterForm = (obj: unknown, fields: string[]): unknown => {
  const newObj = {};
  fields.map((item) => {
    if (obj[item]) {
      return (newObj[item] = obj[item]);
    } else {
      throw new InvalidField("Todos os campos devem ser preenchidos.");
    }
  });

  return newObj;
};
