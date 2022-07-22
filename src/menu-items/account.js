import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
};

// ===========================|| UNAUTHENTICATED PAGES FOR ACCOUNT INFO ||=========================== //

const account = {
  id: "account",
  title: "Account",
  caption: "Get to your account",
  type: "group",
  children: [
    {
      id: "authentication",
      title: "My Account",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "login3",
          title: "Login",
          type: "item",
          url: "/pages/login/login3",
        },
        {
          id: "register3",
          title: "Register",
          type: "item",
          url: "/pages/register/register3",
        },
      ],
    },
  ],
};

export default account;