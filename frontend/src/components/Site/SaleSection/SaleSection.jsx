import React from "react";
import "./SaleSection.scss";

const SaleSection = () => {
  return (
    <div className="SaleSection">
      <div className="SaleSection__left">
        <img
          src="https://preview.colorlib.com/theme/shop/img/header-img.png"
          alt=""
        />
      </div>
      <div className="SaleSection__right">
        <p>
          <span>Flat</span> 75%Off
        </p>
        <h1>IT’S HAPPENING THIS SEASON!</h1>
        <button>PURCHASE NOW</button>
      </div>
    </div>
  );
};

export default SaleSection;
