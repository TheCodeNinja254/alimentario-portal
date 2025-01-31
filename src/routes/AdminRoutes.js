import React, { lazy } from "react";
import Loadable from "../ui-component/Loadable";
import AdminLayout from "../layout/AdminLayout";

const ComingSoonComponent = Loadable(lazy(() => import("../views/comingSoon")));
const OrdersComponent = Loadable(lazy(() => import("../views/admin/orders")));
const PointOfSale = Loadable(lazy(() => import("../views/admin/pointOfSale")));

const AuthenticationRoutes = {
  path: "/",
  element: <AdminLayout />,
  children: [
    {
      path: "/admin",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/orders/:orderType",
      element: <OrdersComponent />,
    },
    {
      path: "/admin/products/toasted",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/products/horse-racing",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/products/harvest",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/customer-list",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/users",
      element: <ComingSoonComponent />,
    },
    {
      path: "/admin/point-of-sale",
      element: <PointOfSale />,
    },
  ],
};

export default AuthenticationRoutes;
