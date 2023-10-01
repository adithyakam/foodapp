import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import offer from "../../assets/offers.svg";
import help from "../../assets/help.svg";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

import { useSelector } from "react-redux";
import LoginSideBar from "../LoginSidebar/LoginSideBar";

function Header() {
  const { name } = useContext(userContext);
  const cartitemcount = useSelector((state) => state.cart.items);

  const cartlength = cartitemcount.reduce((acc, cart) => {
    return (acc = acc + cart.itemNumber);
  }, 0);

  console.log(name);
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
          <div className="header-content flex mx-5 items-center hover:text-orange-400">
            <img src={search} className="header-logo mx-3" />
            <h1 className="font-bold text-sm tracking-wider  ">Search </h1>
          </div>
        </Link>
        <Link to="">
          <div className="header-content flex mx-5 items-center hover:text-orange-400 ">
            <img src={offer} className="header-logo mx-3" />
            <h1 className="font-bold text-sm tracking-wider	">Offer </h1>
          </div>
        </Link>
        <Link to="/help">
          <div className="header-content flex mx-5 items-center hover:text-orange-400">
            <img src={help} className="header-logo mx-3" />
            <h1 className="font-bold text-sm tracking-wider	">Help</h1>
          </div>
        </Link>
        {name ? (
          <Link to="/about">
            <div className="header-content flex mx-5 items-center hover:text-orange-400">
              <img src={profile} className="header-logo mx-3" />
              <button className="font-bold text-sm tracking-wider	">
                {name}
              </button>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="header-content flex mx-5 items-center hover:text-orange-400">
              <img src={profile} className="header-logo mx-3" />
              <button className="font-bold text-sm tracking-wider	">
                {name ? name : "login"}
              </button>
            </div>
          </Link>
        )}

        <Link to="/cart">
          <div className="header-content flex mx-5 items-center hover:text-orange-400 relative">
            <img src={cart} className="header-logo mx-3" />
            <h3 className="text-[8px] absolute  z-20 left-[18] font-semibold">
              {cartlength}
            </h3>
            <h1 className="font-bold text-sm tracking-wider	">Cart</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
