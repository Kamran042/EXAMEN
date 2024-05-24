import React from "react";
import Header from "../../layout/site/Header/header";
import { Outlet } from "react-router";
import Footer from "../../layout/site/Footer/footer";

const SiteRoot = () => {
  return (
    <div className="siteRoot">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SiteRoot;
