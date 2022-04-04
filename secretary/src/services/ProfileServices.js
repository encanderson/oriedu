import { getProfile } from "@src/api";

export class ProfileServices {
  static async getProfile() {
    const response = await getProfile();

    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  }
}
