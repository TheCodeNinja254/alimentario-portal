import {
  IconBug,
  IconKey,
  IconReceipt2,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconUser,
  IconShoppingCart,
};

const accountAuthenticated = {
  id: "accountAuthenticated",
  title: "Account",
  caption: "Get to your Account",
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
          url: "/pending-orders",
        },
        {
          id: "orderHistory",
          title: "Order History",
          type: "item",
          url: "/orders",
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
          id: "account",
          title: "My Account",
          type: "item",
          url: "/account",
        },
      ],
    },
  ],
};

export default accountAuthenticated;
