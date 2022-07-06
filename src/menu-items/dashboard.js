// assets
import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons";

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
  id: "dashboard",
  title: "Home",
  type: "group",
  children: [
    {
      id: "default",
      title: "Our Steaks & Cheese",
      type: "item",
      url: "/dashboard/default",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "gallery",
      title: "Chef at work",
      type: "item",
      url: "/gallery",
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
