import React, { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";

const DashboardDefault = Loadable(
  lazy(() => import("../views/dashboard/Default"))
);

const CheckoutView = Loadable(lazy(() => import("../views/checkout")));

// Gallery Routing
const GalleryDefault = Loadable(lazy(() => import("../views/gallery")));

const CookiePolicyView = Loadable(
  lazy(() => import("../views/policy/CookiePolicy"))
);

const TermsConditions = Loadable(
  lazy(() => import("../views/policy/TermsConditions"))
);

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
      path: "/dashboard/default",
      element: <DashboardDefault />,
    },
    {
      path: "/checkout",
      element: <CheckoutView />,
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
