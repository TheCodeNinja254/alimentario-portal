// assets
import { IconBrandChrome, IconHelp, IconSitemap } from "@tabler/icons";

// constant
const icons = {
  IconBrandChrome,
  IconHelp,
  IconSitemap,
};

// ===========================|| BLOG PAGE ||=========================== //

const other = {
  id: "sample-docs-roadmap",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "The Chef's Blog",
      type: "item",
      url: "/sample-page",
      icon: icons.IconBrandChrome,
      breadcrumbs: false,
    },
  ],
};

export default other;
