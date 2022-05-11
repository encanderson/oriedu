import { FormattedMessage } from "react-intl";

import { IconNotebook, IconSquarePlus, IconClipboardList } from "@tabler/icons";

const icons = {
  IconNotebook: IconNotebook,
  IconSquarePlus: IconSquarePlus,
  IconClipboardList: IconClipboardList,
};

export const classes = {
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
};
