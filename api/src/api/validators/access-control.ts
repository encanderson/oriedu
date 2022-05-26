import { AccessControl } from "accesscontrol";

const grants = {
  admin: {
    classes: {
      "create:any": ["modality", "class", "shift", "school_id", "subjects"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    employees: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    students: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    schools: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    teachers: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    users: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
    },
  },
};

export const accessController = new AccessControl(grants);
