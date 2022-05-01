import { AccessControl } from "accesscontrol";

const grants = {
  admin: {
    classes: {
      "create:any": ["modality", "class", "shift", "school_id"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
  },
};

export const accessController = new AccessControl(grants);
