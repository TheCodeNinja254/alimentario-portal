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
  import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);
const SecureNetView = lazy(() =>
  import(/* webpackChunkName: "SecureNet" */ "./pages/SecureNet")
);
const HomeInsuranceView = lazy(() =>
  import(/* webpackChunkName: "SecureNet" */ "./pages/HomeInsurance")
);
const HomeCCTV = lazy(() =>
  import(/* webpackChunkName: "SecureNet" */ "./pages/HomeCCTV")
);
const WirelessView = lazy(() =>
  import(/* webpackChunkName: "WirelessView" */ "./pages/Wireless")
);
const EntertainmentView = lazy(() =>
  import(/* webpackChunkName: "EntertainmentView" */ "./pages/Entertainment")
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
        component={HomeView}
        layout={MainLayout}
        exact
        path="/home"
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
      <RouteWithLayout
        component={SecureNetView}
        layout={MainLayout}
        exact
        path="/secure-net"
      />
      <RouteWithLayout
        component={HomeInsuranceView}
        layout={MainLayout}
        exact
        path="/home-insurance"
      />
      <RouteWithLayout
        component={HomeCCTV}
        layout={MainLayout}
        exact
        path="/home-cctv"
      />
      <RouteWithLayout
        component={WirelessView}
        layout={MainLayout}
        exact
        path="/4g-wifi-router"
      />
      <RouteWithLayout
        component={EntertainmentView}
        layout={MainLayout}
        exact
        path="/entertainment"
      />
      <RouteWithLayout component={NotFoundView} layout={MainLayout} />
    </Switch>
  );
};

export default AppRoutes;
