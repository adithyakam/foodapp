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
  const restuarant = useSelector((state) => state.restuarant.restuarant);
  console.log(restuarant);
  const {
    name,
    city,
    costForTwo,
    areaName,
    cuisines,
    avgRatingString,
    totalRatingsString,
    deliveryTime,
  } = restuarant;
  return (
    <div>
      <div className="w-full h-full bg-[#e9ecee] p-4 rounded-md">
        <div className="grid grid-cols-12 h-screen	 grid-rows-6  w-[80%] bg-transparent m-auto gap-8  ">
          <div className="col-span-8 row-start-1	row-span-3 col-start-1 bg-white z-10 shadow-sm rounded-md">
            <div className="p-8">
              <h1 className="text-base font-semibold text-gray-900 ">
                Select delivery address
              </h1>
              <h5 className="text-sm text-gray-400">
                You have a saved address in this location
              </h5>
              <div className="flex mt-4 ">
                <div>
                  <h1 className="text-base font-semibold text-gray-900 ">
                    Home
                  </h1>
                  <h3 className="text-sm text-gray-400">
                    xyz , abc 2nd phsa , xxxx shimoga,karnataka,India-577205
                  </h3>
                  <h3 className="text-sm text-gray-900 mt-2">
                    {deliveryTime} mins
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 row-start-4 p-8	row-span-2 col-start-1 bg-white z-10 shadow-sm rounded-md">
            <h1 className="text-base font-semibold text-gray-900 ">
              Choose payment method
            </h1>
            <button className="w-full bg-[#60b246] text-slate-100 font-bold tracking-wide	mt-2 p-4">
              Proceed To Pay
            </button>
          </div>
          <div className=" row-span-5 col-span-4	row-start-1 col-start-9  bg-white z-10 p-4">
            <h1 className="text-sm font-semibold text-gray-900 border-b-2 border-dashed p-1 mb-2">
              {name}
            </h1>
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
                <div className={"flex h-5  py-7 px-0 items-center"}>
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
                      Rs {itemNumber * (price / 100)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" row-span-1 col-span-4	row-start-5 col-start-9  bg-white z-10 p-4">
            <div className="w-[80%] flex justify-between m-auto border-t-2 border-solid border-black p-2">
              <h1 className="font-semibold">To pay</h1>
              <h1>
                {cart
                  .map((item) => {
                    const { price, itemNumber } = item;
                    return (price / 100) * itemNumber;
                  })
                  .reduce((acc, price) => acc + price, 0)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
