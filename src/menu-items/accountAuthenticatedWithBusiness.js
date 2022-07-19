import {
  IconKey,
  IconReceipt2,
  IconBuildingBank,
  IconUser,
  IconShoppingCart,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBuildingBank,
  IconUser,
  IconShoppingCart,
};

// ===========================|| UNAUTHENTICATED PAGES FOR ACCOUNT INFO ||=========================== //

const accountAuthenticated = {
  id: "accountAuthenticated",
  title: "Account",
  caption: "Get to your account",
  type: "group",
  children: [
    {
      id: "orders",
      title: "My Orders",
      type: "collapse",
      icon: icons.IconShoppingCart,
      children: [
        {
          id: "pendingOrders",
          title: "Pending Orders",
          type: "item",
          url: "/pages/login/login3",
        },
        {
          id: "orderHistory",
          title: "Order History",
          type: "item",
          url: "/pages/register/register3",
        },
      ],
    },
    {
      id: "business",
      title: "My Business",
      type: "collapse",
      icon: icons.IconBuildingBank,
      children: [
        {
          id: "Business Pending Orders",
          title: "Manage My Account",
          type: "item",
          url: "/pages/login/login3",
        },
        {
          id: "businessOrderHistory",
          title: "Business Order History",
          type: "item",
          url: "/pages/register/register3",
        },
      ],
    },
    {
      id: "account",
      title: "My Account",
      type: "collapse",
      icon: icons.IconUser,
      children: [
        {
          id: "manageAccount",
          title: "Manage My Account",
          type: "item",
          url: "/pages/login/login3",
        },
        {
          id: "logout",
          title: "Logout",
          type: "item",
          url: "/pages/register/register3",
        },
      ],
    },
  ],
};

export default accountAuthenticated;
