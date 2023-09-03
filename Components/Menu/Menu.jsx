import React from "react";
import "./Menu.css";
import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/non-veg.svg";
import bestseller from "../../assets/star-yellow.svg";
import { menuimage } from "../utils/utils";

const Menu = (props) => {
  const {
    info: { name, price, inStock, isVeg, imageId, isBestseller, description },
    isopen,
  } = props;

  return (
    <div className={isopen ? "menu-container" : "menu-container menuclose"}>
      <div className="menu-content-container">
        <div className="menu-content-images">
          {isVeg == 1 ? (
            <img src={veg} className="menu-content-foodtype" />
          ) : (
            <img src={nonveg} className="menu-content-foodtype" />
          )}
          <img src={bestseller} className="menu-content-bestseller-image" />

          <h1 className="menu-content-bestseller">Bestseller</h1>
        </div>
        <div className="menu-content-name">{name}</div>
        <div className="menu-content-price">Rs {price / 100}</div>
        <div className="menu-content-description">{description}</div>
      </div>
      <div className="menu-image-container">
        {imageId ? (
          <img src={`${menuimage}${imageId}`} className="menu-image" />
        ) : (
          <></>
        )}
        <button className={imageId ? "menu-cart-btn" : "menu-cart-btn-noimage"}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Menu;
