import React, { lazy } from "react";
import Loadable from "../ui-component/Loadable";

// project imports
import MinimalLayout from "../layout/MinimalLayout";

// login option 3 routing
const AuthLogin3 = Loadable(
  lazy(() => import("../views/account/Authentication/Login"))
);
const AuthRegister3 = Loadable(
  lazy(() => import("../views/account/CustomerRegistration/Register3"))
);

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/account/login/login3",
      element: <AuthLogin3 />,
    },
    {
      path: "/account/register/register3",
      element: <AuthRegister3 />,
    },
  ],
};

export default AuthenticationRoutes;
