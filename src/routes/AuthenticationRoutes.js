import React, { lazy } from "react";
import Loadable from "../ui-component/Loadable";

// project imports
import MinimalLayout from "../layout/MinimalLayout";

// login option 3 routing
const CustomerAuth = Loadable(
  lazy(() => import("../views/account/Authentication"))
);
const CustomerAccountCreation = Loadable(
  lazy(() => import("../views/account/CustomerRegistration"))
);

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/auth",
      element: <CustomerAuth />,
    },
    {
      path: "/create-account",
      element: <CustomerAccountCreation />,
    },
  ],
};

export default AuthenticationRoutes;
