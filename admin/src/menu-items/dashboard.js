// third-party
import { FormattedMessage } from "react-intl";

// assets
import { IconDeviceAnalytics } from "@tabler/icons";

import { classes, employees, student, section } from "../apps";

// constant
const icons = {
  IconDeviceAnalytics: IconDeviceAnalytics,
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
  id: "dashboard",
  title: <FormattedMessage id="dashboard" />,
  type: "group",
  children: [
    {
      id: "analytics",
      title: <FormattedMessage id="analytics" />,
      type: "item",
      url: "/dashboard",
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false,
    },
    section,
    classes,
    employees,
    student,
  ],
};
