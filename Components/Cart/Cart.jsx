import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/non-veg.svg";
import bestseller from "../../assets/star-yellow.svg";
import { menuimage } from "../utils/utils";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      {cart.map((menu) => {
        const {
          name,
          price,
          inStock,
          isVeg,
          imageId,
          isBestseller,
          description,
        } = menu;
        return (
          <div className="w-full h-full bg-slate-100">
            <div className="grid grid-cols-2 w-[80%] bg-transparent m-auto gap-1 mt-4 ">
              <div className="col-span-2 row-start-1	col-start-1 bg-white z-10 shadow-sm">
                hi
              </div>
              <div
                className={
                  " col-span-1	row-start-1 col-start-10 flex justify-between py-7 px-0 items-center border-b-2 bg-white z-10 shadow-sm"
                }
              >
                <div className="menu-content-container  flex items-center">
                  {isVeg == 1 ? (
                    <img src={veg} className="h-5 w-5 object-contain" />
                  ) : (
                    <img src={nonveg} className="h-5 w-5 object-contain" />
                  )}

                  <div className="text-sm">{name}</div>
                  <div className=" border-green-500 border-solid  border-[1px] w-14 h-7 flex flex-nowrap items-center justify-around">
                    <button
                      className={
                        "cursor-pointer rounded-m text-green-400 text-sm mx-2 "
                      }
                    >
                      -
                    </button>
                    0
                    <button
                      className={
                        "cursor-pointer rounded-md  text-green-400 text-sm mx-2"
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="menu-content-price">Rs {price / 100}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
