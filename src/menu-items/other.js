// assets
import { IconBrandChrome, IconHelp, IconSitemap } from "@tabler/icons";

// constant
const icons = {
  IconBrandChrome,
  IconHelp,
  IconSitemap,
};

const other = {
  id: "terms-conditions-page",
  type: "group",
  children: [
    {
      id: "terms-conditions",
      title: "Terms & Conditions",
      type: "collapse",
      url: "/sample-page",
      icon: icons.IconBrandChrome,
      children: [
        {
          id: "terms",
          title: "Terms & Conditions",
          type: "item",
          url: "/terms",
          breadcrumbs: false,
        },
        {
          id: "cookie-policy",
          title: "Cookie Policy",
          type: "item",
          url: "/cookie-policy",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default other;
