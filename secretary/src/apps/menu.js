import { FormattedMessage } from "react-intl";

import {
  IconNewSection,
  IconNotebook,
  IconUserPlus,
  IconSchool,
} from "@tabler/icons";

const icons = {
  IconNewSection: IconNewSection,
  IconNotebook: IconNotebook,
  IconUserPlus: IconUserPlus,
  IconSchool: IconSchool,
};

export const section = {
  id: "new",
  title: <FormattedMessage id="new" />,
  type: "collapse",
  icon: icons.IconNewSection,
  children: [
    {
      id: "class",
      title: <FormattedMessage id="class" />,
      type: "item",
      icon: icons.IconNotebook,
      url: "/adicionar-turma",
      breadcrumbs: false,
    },
    {
      id: "employee",
      title: <FormattedMessage id="employee" />,
      type: "item",
      icon: icons.IconUserPlus,
      url: "/adicionar-funcionario",
      breadcrumbs: false,
    },
    {
      id: "student",
      title: <FormattedMessage id="student" />,
      type: "item",
      icon: icons.IconSchool,
      url: "/adicionar-estudante",
      breadcrumbs: false,
    },
  ],
};
