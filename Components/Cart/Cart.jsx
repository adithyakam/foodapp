import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/non-veg.svg";
import bestseller from "../../assets/star-yellow.svg";
import { menuimage } from "../utils/utils";
import { addCart, removeCart } from "../Redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((menu) => {
        const {
          name,
          price,
          inStock,
          isVeg,
          id,
          imageId,
          isBestseller,
          description,
          itemNumber,
        } = menu;
        return (
          <div className="w-full h-full bg-[#e9ecee] p-4 rounded-md">
            <div className="grid grid-cols-12 w-[80%] bg-transparent m-auto gap-8  ">
              <div className="col-span-8 row-start-1	col-start-1 bg-white z-10 shadow-sm rounded-md">
                hi
              </div>
              <div
                className={
                  " col-span-4	row-start-1 col-start-9 flex  py-7 px-0 items-center border-b-2 rounded-md bg-white z-10 shadow-sm"
                }
              >
                <div className="menu-content-container  flex items-center justify-around w-full">
                  {isVeg == 1 ? (
                    <img
                      src={veg}
                      className="h-5 w-5 object-contain mx-3 justify-start"
                    />
                  ) : (
                    <img
                      src={nonveg}
                      className="h-5 w-5 object-contain mx-3 justify-start"
                    />
                  )}

                  <div className="text-sm w-[30%] justify-start">{name}</div>
                  <div className=" border-green-500 border-solid mx-3 border-[1px] w-14 h-7 flex flex-nowrap items-center justify-around">
                    <button
                      onClick={() => {
                        dispatch(removeCart(id));
                      }}
                      className={
                        "cursor-pointer rounded-m text-green-400 text-sm mx-3 "
                      }
                    >
                      -
                    </button>
                    {itemNumber}
                    <button
                      onClick={() => {
                        const item = { ...menu, itemNumber: 1 };
                        dispatch(addCart(item));
                      }}
                      className={
                        "cursor-pointer rounded-md  text-green-400 text-sm mx-3"
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="menu-content-price mx-1 justify-end">
                    Rs {price / 100}
                  </div>
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
