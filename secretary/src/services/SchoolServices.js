import { updateSchool } from "@src/api";

export class SchoolServices {
  static async update(data) {
    const response = await updateSchool(data);

    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
