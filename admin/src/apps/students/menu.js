import { FormattedMessage } from "react-intl";

import { IconSchool, IconClipboardList } from "@tabler/icons";

const icons = {
  IconSchool: IconSchool,
  IconClipboardList: IconClipboardList,
};

export const student = {
  id: "students",
  title: <FormattedMessage id="students" />,
  type: "item",
  icon: icons.IconSchool,
  url: "/estudantes", // remove
  breadcrumbs: false, // remove
  // children: [
  //   {
  //     id: "list",
  //     title: <FormattedMessage id="list" />,
  //     type: "item",
  //     icon: icons.IconClipboardList,
  //     url: "/estudantes",
  //     breadcrumbs: false,
  //   },
  // ],
};
