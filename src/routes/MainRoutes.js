import React, { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";

const DashboardDefault = Loadable(lazy(() => import("../views/home")));

const CheckoutView = Loadable(lazy(() => import("../views/checkout")));

// Gallery Routing
const GalleryDefault = Loadable(lazy(() => import("../views/gallery")));

const CookiePolicyView = Loadable(
  lazy(() => import("../views/policy/CookiePolicy"))
);

const TermsConditions = Loadable(
  lazy(() => import("../views/policy/TermsConditions"))
);

const MyBusinessView = Loadable(lazy(() => import("../views/wholesale")));

const OrdersView = Loadable(lazy(() => import("../views/orders/completed")));

const PendingOrdersView = Loadable(
  lazy(() => import("../views/orders/pending"))
);

const AccountView = Loadable(lazy(() => import("../views/account")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/gallery",
      element: <GalleryDefault />,
    },
    {
      path: "/home/default",
      element: <DashboardDefault />,
    },
    {
      path: "/checkout",
      element: <CheckoutView />,
    },
    {
      path: "/account",
      element: <AccountView />,
    },
    {
      path: "/my-business",
      element: <MyBusinessView />,
    },
    {
      path: "/orders",
      element: <OrdersView />,
    },
    {
      path: "/pending-orders",
      element: <PendingOrdersView />,
    },
    {
      path: "/terms",
      element: <TermsConditions />,
    },
    {
      path: "/cookie-policy",
      element: <CookiePolicyView />,
    },
  ],
};

export default MainRoutes;
