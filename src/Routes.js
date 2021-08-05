import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from "./layouts/MainLayout";

const HomeView = lazy(() =>
  import(/* webpackChunkName: "homeView" */ "./pages/Home")
);
const RegisterCustomerView = lazy(() =>
  import(/* webpackChunkName: "RegisterCustomer" */ "./pages/Home/Register")
);
const ProgressCheckView = lazy(() =>
  import(/* webpackChunkName: "ProgressCheck" */ "./pages/Home/ProgressCheck")
);
const NotFoundView = lazy(() =>
  import(/* webpackChunkName: "notFound" */ "./pages/NotFound")
);
const AppRoutes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        layout={MainLayout}
        exact
        path="/"
      />
      <RouteWithLayout
        component={RegisterCustomerView}
        layout={MainLayout}
        exact
        path="/register"
      />
      <RouteWithLayout
        component={ProgressCheckView}
        layout={MainLayout}
        exact
        path="/confirmation"
      />
      <RouteWithLayout component={NotFoundView} layout={MainLayout} />
    </Switch>
  );
};

export default AppRoutes;
