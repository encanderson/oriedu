import { FormattedMessage } from "react-intl";

import { IconLockOff, IconReport } from "@tabler/icons";

import config from "@src/config";

const icons = {
  IconLockOff: IconLockOff,
  IconReport: IconReport,
};

export const others = {
  id: "docs",
  title: <FormattedMessage id="docs" />,
  type: "group",
  children: [
    {
      id: "privacy",
      title: <FormattedMessage id="privacy" />,
      type: "item",
      url: `${config.orisistem}/politica-de-privacidade`,
      external: true,
      target: "_blank",
      icon: icons.IconLockOff,
      breadcrumbs: false,
    },
    {
      id: "terms",
      title: <FormattedMessage id="terms" />,
      type: "item",
      url: `${config.orisistem}/termos-de-uso`,
      external: true,
      target: "_blank",
      icon: icons.IconReport,
      breadcrumbs: false,
    },
  ],
};
