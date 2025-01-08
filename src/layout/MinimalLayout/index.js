import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const MinimalLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default MinimalLayout;
