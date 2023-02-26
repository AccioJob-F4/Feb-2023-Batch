import React from "react";
import ReactLogo from "../../logo.svg";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Nav.css";
import { PATHS } from "../../paths";

const Nav = () => {
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate(PATHS.LOGIN);
  };

  return (
    <div className="nav-container">
      <img
        src={ReactLogo}
        className="nav-logo"
        onClick={() => {
          navigate(PATHS.PRODUCT_LIST);
        }}
      />
      <div
        className="nav-app-name"
        onClick={() => {
          navigate(PATHS.PRODUCT_LIST);
        }}
      >
        E-Commerce Application
      </div>
      <div className="nav-right">
        <div
          className="nav-cart"
          onClick={() => {
            window.location.pathname === "/cart"
              ? navigate(PATHS.PRODUCT_LIST)
              : navigate(PATHS.CART);
          }}
        >
          {window.location.pathname === "/cart"
            ? "Home"
            : `Cart(${store.cart.length})`}
        </div>
        <div className="nav-cart" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Nav;
