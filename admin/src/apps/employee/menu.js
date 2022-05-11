import { FormattedMessage } from "react-intl";

import { IconSquarePlus, IconClipboardList } from "@tabler/icons";

import BadgeIcon from "@mui/icons-material/Badge";

const icons = {
  BadgeIcon: BadgeIcon,
  IconSquarePlus: IconSquarePlus,
  IconClipboardList: IconClipboardList,
};

export const employees = {
  id: "employees",
  title: <FormattedMessage id="employees" />,
  type: "collapse",
  icon: icons.BadgeIcon,
  children: [
    {
      id: "add",
      title: <FormattedMessage id="add" />,
      type: "item",
      icon: icons.IconSquarePlus,
      url: "/adicionar-funcionario",
      breadcrumbs: false,
    },
    {
      id: "list",
      title: <FormattedMessage id="list" />,
      type: "item",
      icon: icons.IconClipboardList,
      url: "/funcionarios",
      breadcrumbs: false,
    },
  ],
};
