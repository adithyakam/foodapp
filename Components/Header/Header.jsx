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
    <div className="flex justify-around align-middle shadow-header z-10 h-20 ">
      <div className="flex justify-around items-center p-4 	">
        <img src={logo} className=" mr-10" />
        <h1>shimoga</h1>
        <div className="">
          <img src={down} className=" ml-1" />
        </div>
      </div>
      <div className="flex justify-around items-center p-4 ">
        <Link to="/search">
          <div className="header-content flex m-5 items-center">
            <img src={search} className="header-logo m-2" />
            <h1 className="font-bold text-sm">Search </h1>
          </div>
        </Link>
        <Link to="/offer">
          <div className="header-content flex m-5 items-center ">
            <img src={offer} className="header-logo m-2" />
            <h1 className="font-bold text-sm">Offer </h1>
          </div>
        </Link>
        <Link to="/help">
          <div className="header-content flex m-5 items-center">
            <img src={help} className="header-logo m-2" />
            <h1 className="font-bold text-sm">Help</h1>
          </div>
        </Link>
        <Link to="/about">
          <div className="header-content flex m-5 items-center">
            <img src={profile} className="header-logo m-2" />
            <h1 className="font-bold text-sm">About</h1>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header-content flex m-5 items-center">
            <img src={cart} className="header-logo m-2" />{" "}
            <h1 className="font-bold text-sm">Cart</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
