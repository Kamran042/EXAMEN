import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SaleSection from "../../../components/Site/SaleSection/SaleSection";
import Women from "../../../components/Site/ProductsWomen/Women";
import Productmen from "../../../components/Site/ProductMen/Productmen";
import Shop from "../../../components/Site/Shop/Shop";

const Home = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SaleSection />
      <Shop/>
      <Productmen/>
      <Women/>
    </>
  );
};

export default Home;
