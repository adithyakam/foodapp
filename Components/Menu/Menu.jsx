import React from "react";
import "./Menu.css";
import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/non-veg.svg";
import bestseller from "../../assets/star-yellow.svg";
import { menuimage } from "../utils/utils";
import { useDispatch } from "react-redux";

import { addCart } from "../Redux/cartSlice";

const Menu = (props) => {
  const {
    info: { name, price, inStock, isVeg, imageId, isBestseller, description },
    isopen,
    vegonly,
  } = props;

  const dispatch = useDispatch();

  const MenuComponent = () => {
    return (
      <>
        <div
          className={
            isopen
              ? "flex justify-between py-7 px-0 items-center border-b-2"
              : "flex justify-between py-7 px-0 items-center border-b-2 hidden invisible menuclose"
          }
        >
          <div className="menu-content-container w-[80%]">
            <div className="flex flex-row items-center">
              {isVeg == 1 ? (
                <img src={veg} className="h-5 w-5 object-contain" />
              ) : (
                <img src={nonveg} className="h-5 w-5 object-contain" />
              )}
              {isBestseller ? (
                <>
                  <img src={bestseller} className="h-4 w-4 ml-3" />
                  <h1 className="text-sm ml-1">Bestseller</h1>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="font-extrabold">{name}</div>
            <div className="menu-content-price">Rs {price / 100}</div>
            <div className="text-[8]">{description}</div>
          </div>
          <div className="relative">
            {imageId ? (
              <img
                src={`${menuimage}${imageId}`}
                className="h-24 w-32 rounded-md shadow object-cover  "
              />
            ) : (
              <></>
            )}
            <button
              onClick={() => {
                dispatch(addCart(props.info));
              }}
              className={
                imageId
                  ? "absolute rounded-md border-green-300 bottom-[-5%] right-[10%] m-auto w-[80%] p-1 b-0 text-green-400 text-sm shadow-md cursor-pointer bg-slate-50"
                  : "cursor-pointer border-green-300 rounded-md absolute right-4 m-auto w-24 p-1 b-0 bg-slate-50 text-green-400 text-sm shadow-md"
              }
            >
              Add
            </button>
          </div>
        </div>
      </>
    );
  };

  return vegonly ? isVeg ? <MenuComponent /> : null : <MenuComponent />;
};

export default Menu;
