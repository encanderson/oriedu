import { FormattedMessage } from "react-intl";

import { IconNotebook, IconClipboardList } from "@tabler/icons";

const icons = {
  IconNotebook: IconNotebook,
  IconClipboardList: IconClipboardList,
};

export const classes = {
  id: "classes",
  title: <FormattedMessage id="classes" />,
  type: "item",
  icon: icons.IconNotebook,
  url: "/turmas",
  breadcrumbs: false,
};
