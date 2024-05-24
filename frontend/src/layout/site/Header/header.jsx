import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";

const Header = () => {
  const { basket, wishlist } = useContext(MainContext);
  return (
    <div className="site_header">
      <div className="site__header__box">
        <div className="site_header__left">
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png"
            alt=""
          />
        </div>
        <div className="site_header__right">
          <ul className="header__nav">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">CATEGORY</Link>
            </li>
            <li>
              <Link to="/">MEN</Link>
            </li>
            <li>
              <Link to="/">WOMEN</Link>
            </li>
            <li>
              <Link to="wishlist">WISHLIST ({wishlist.length})</Link>
            </li>
            <li>
              <Link to="basket">BASKET ({basket.length})</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
