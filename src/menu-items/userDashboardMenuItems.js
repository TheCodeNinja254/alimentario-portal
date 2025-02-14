import {
  Dashboard,
  FastfoodOutlined,
  Person,
  PersonAdd,
  ShoppingCart,
} from "@material-ui/icons";

const dashboard = {
  id: "account",
  title: "Desafio Panel",
  caption: "Orders and Products",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/admin/",
      icon: Dashboard,
      breadcrumbs: false,
    },
    {
      id: "pospos",
      title: "Point of Sale",
      type: "collapse",
      icon: ShoppingCart,
      children: [
        {
          id: "pos",
          title: "Point of Sale (POS)",
          type: "item",
          url: "/admin/point-of-sale",
        },
        {
          id: "pos",
          title: "POS Orders",
          type: "item",
          url: "/admin/point-of-sale/orders",
        },
      ],
    },
    {
      id: "orders",
      title: "Orders",
      type: "collapse",
      icon: ShoppingCart,
      children: [
        {
          id: "new",
          title: "New Orders",
          type: "item",
          url: "/admin/orders/new",
        },
        {
          id: "pre-orders",
          title: "Pre-orders",
          type: "item",
          url: "/admin/orders/pre-orders",
        },
        {
          id: "Past-Orders",
          title: "Past Orders",
          type: "item",
          url: "/admin/orders/past-orders",
        },
      ],
    },
    {
      id: "Products",
      title: "Our Products",
      type: "collapse",
      icon: FastfoodOutlined,
      children: [
        {
          id: "auth",
          title: "Toasted",
          type: "item",
          url: "/admin/products/toasted",
        },
        {
          id: "horse-racing",
          title: "Horse Racing",
          type: "item",
          url: "/admin/products/horse-racing",
        },
        {
          id: "harvest",
          title: "Desafio Harvest",
          type: "item",
          url: "/admin/products/harvest",
        },
      ],
    },
    {
      id: "Customers",
      title: "Customers",
      type: "collapse",
      icon: Person,
      children: [
        {
          id: "auth",
          title: "Toasted",
          type: "item",
          url: "/admin/customer-list",
        },
      ],
    },
    {
      id: "users",
      title: "Desafio Users",
      type: "item",
      url: "/admin/users",
      icon: PersonAdd,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
