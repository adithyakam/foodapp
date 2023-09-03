import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import offer from "../../assets/offers.svg";
import help from "../../assets/help.svg";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <img src={logo} className="header-logo-main" />
        <h1>shimoga</h1>
        <div className="header-content">
          <img src={down} className="header-logo" />
        </div>
      </div>
      <div className="header-menu-items">
        <Link to="/search">
          <div className="header-content">
            <img src={search} className="header-logo" /> <h1>Search </h1>
          </div>
        </Link>
        <Link to="/offer">
          <div className="header-content">
            <img src={offer} className="header-logo" /> <h1>Offer </h1>
          </div>
        </Link>
        <Link to="/help">
          {" "}
          <div className="header-content">
            <img src={help} className="header-logo" /> <h1>Help</h1>
          </div>
        </Link>
        <Link to="/about">
          {" "}
          <div className="header-content">
            <img src={profile} className="header-logo" /> <h1>About</h1>
          </div>
        </Link>
        <Link to="/cart">
          {" "}
          <div className="header-content">
            <img src={cart} className="header-logo" /> <h1>Cart</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
