import { getProfile, updateProfile } from "@src/api";

export class ProfileServices {
  static async getProfile() {
    const response = await getProfile();

    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  }

  static async updateProfile(data) {
    const response = await updateProfile(data);

    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
