import React, { lazy } from "react";
import Loadable from "../ui-component/Loadable";

// project imports
import MinimalLayout from "../layout/MinimalLayout";

// login option 3 routing
const CustomerAuth = Loadable(
  lazy(() => import("../views/auth/Authentication"))
);
const CustomerAccountCreation = Loadable(
  lazy(() => import("../views/auth/CustomerAccountCreation"))
);
const PasswordReset = Loadable(
  lazy(() => import("../views/auth/PasswordReset"))
);

const UserAuth = Loadable(lazy(() => import("../views/admin/auth")));

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/admin/auth",
      element: <UserAuth />,
    },
    {
      path: "/auth",
      element: <CustomerAuth />,
    },
    {
      path: "/create-account",
      element: <CustomerAccountCreation />,
    },
    {
      path: "/forgot-password",
      element: <PasswordReset />,
    },
  ],
};

export default AuthenticationRoutes;
