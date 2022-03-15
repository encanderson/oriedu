// third-party
import { FormattedMessage } from "react-intl";

// assets
import {
  IconDeviceAnalytics,
  IconReportMoney,
  IconFilePlus,
  IconBusinessplan,
  IconCoin,
} from "@tabler/icons";

// constant
const icons = {
  IconDeviceAnalytics: IconDeviceAnalytics,
  IconReportMoney: IconReportMoney,
  IconFilePlus: IconFilePlus,
  IconBusinessplan: IconBusinessplan,
  IconCoin: IconCoin,
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
      icon: icons["IconDeviceAnalytics"],
      breadcrumbs: false,
    },
    {
      id: "orc",
      title: <FormattedMessage id={"orc"} />,
      type: "collapse",
      icon: icons.IconReportMoney,
      children: [
        {
          id: "addorc",
          title: <FormattedMessage id="addorc" />,
          type: "item",
          icon: icons.IconFilePlus,
          url: "/novo-orcamento",
          breadcrumbs: false,
        },
        {
          id: "all-orc",
          title: <FormattedMessage id="all-orc" />,
          type: "item",
          icon: icons.IconBusinessplan,
          url: "/orcamentos",
          breadcrumbs: false,
        },
        {
          id: "quotes",
          title: <FormattedMessage id="quotes" />,
          type: "item",
          icon: icons.IconCoin,
          url: "/cotacoes",
          breadcrumbs: false,
        },
      ],
    },
  ],
};
