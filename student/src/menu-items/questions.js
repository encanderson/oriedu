import { FormattedMessage } from "react-intl";

import { IconQuestionMark } from "@tabler/icons";

const icons = {
  IconQuestionMark: IconQuestionMark,
};

export const questions = {
  id: "questions",
  title: <FormattedMessage id="questions" />,
  type: "group",
  children: [
    {
      id: "request",
      title: <FormattedMessage id="request" />,
      type: "item",
      url: "/duvidas-e-sugestoes",
      icon: icons.IconQuestionMark,
      breadcrumbs: false,
    },
  ],
};
