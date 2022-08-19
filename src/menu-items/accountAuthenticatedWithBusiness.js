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
  caption: "Get to your auth",
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
      id: "business",
      title: "My Business",
      type: "collapse",
      icon: icons.IconBuildingBank,
      children: [
        {
          id: "Business Pending Orders",
          title: "Manage My Account",
          type: "item",
          url: "/my-business",
        },
        {
          id: "businessOrderHistory",
          title: "Business Order History",
          type: "item",
          url: "/my-business",
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
          url: "/account",
        },
      ],
    },
  ],
};

export default accountAuthenticated;
