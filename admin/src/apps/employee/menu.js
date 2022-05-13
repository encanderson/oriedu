import { FormattedMessage } from "react-intl";

import { IconClipboardList } from "@tabler/icons";

import BadgeIcon from "@mui/icons-material/Badge";

const icons = {
  BadgeIcon: BadgeIcon,
  IconClipboardList: IconClipboardList,
};

export const employees = {
  id: "employees",
  title: <FormattedMessage id="employees" />,
  type: "item",
  icon: icons.BadgeIcon,
  url: "/funcionarios",
  breadcrumbs: false,
};
