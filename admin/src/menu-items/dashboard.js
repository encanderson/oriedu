// third-party
import { FormattedMessage } from "react-intl";

// assets
import {
  IconDeviceAnalytics,
  IconNotebook,
  IconSquarePlus,
  IconClipboardList,
} from "@tabler/icons";

// constant
const icons = {
  IconDeviceAnalytics: IconDeviceAnalytics,
  IconNotebook: IconNotebook,
  IconSquarePlus: IconSquarePlus,
  IconClipboardList: IconClipboardList,
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
    {
      id: "classes",
      title: <FormattedMessage id="classes" />,
      type: "collapse",
      icon: icons.IconNotebook,
      children: [
        {
          id: "add",
          title: <FormattedMessage id="add" />,
          type: "item",
          icon: icons.IconSquarePlus,
          url: "/adicionar-turma",
          breadcrumbs: false,
        },
        {
          id: "list",
          title: <FormattedMessage id="list" />,
          type: "item",
          icon: icons.IconClipboardList,
          url: "/turmas",
          breadcrumbs: false,
        },
      ],
    },
  ],
};
