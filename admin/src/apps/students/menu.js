import { FormattedMessage } from "react-intl";

import { IconSchool, IconSquarePlus, IconClipboardList } from "@tabler/icons";

const icons = {
  IconSchool: IconSchool,
  IconSquarePlus: IconSquarePlus,
  IconClipboardList: IconClipboardList,
};

export const student = {
  id: "students",
  title: <FormattedMessage id="students" />,
  type: "collapse",
  icon: icons.IconSchool,
  children: [
    {
      id: "add",
      title: <FormattedMessage id="add" />,
      type: "item",
      icon: icons.IconSquarePlus,
      url: "/adicionar-estudante",
      breadcrumbs: false,
    },
    {
      id: "list",
      title: <FormattedMessage id="list" />,
      type: "item",
      icon: icons.IconClipboardList,
      url: "/estudantes",
      breadcrumbs: false,
    },
  ],
};
