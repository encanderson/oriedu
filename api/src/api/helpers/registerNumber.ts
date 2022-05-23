import { generateCode } from "../../utils";

export const setRegisterNumber = (fantasia: string): number => {
  const array = fantasia.replace(/ /g, "").split("");

  let value = 0;

  array.map((item) => {
    return (value += item.charCodeAt(0));
  });

  return value;
};

export const setStudentNumber = (register: number): string => {
  const number = generateCode();

  return register + "-" + number;
};
