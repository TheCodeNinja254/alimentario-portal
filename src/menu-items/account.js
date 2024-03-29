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

const account = {
  id: "account",
  title: "Account",
  caption: "Get to your auth",
  type: "group",
  children: [
    {
      id: "Authentication",
      title: "My Account",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "auth",
          title: "Login",
          type: "item",
          url: "/auth",
        },
        {
          id: "account",
          title: "Create Account",
          type: "item",
          url: "/create-account",
        },
      ],
    },
  ],
};

export default account;
