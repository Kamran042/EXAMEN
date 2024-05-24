import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="admin__header">
      <div className="admin__header__left">
        <h1>LOGO</h1>
      </div>
      <div className="admin__header__right">
        <li>
          <Link to="">Products</Link>
        </li>
        <li>
          <Link to="add">Add Products</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
