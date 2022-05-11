import { EmployeeArray } from "../../@types";

export const removeObject = (obj: EmployeeArray[], user_id: string): void => {
  const index = obj.findIndex((object) => {
    return object.user_id === user_id;
  });

  obj.splice(index, 1);
};
