import React from "react";
import { addCart, removeCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem(menu) {
  const dispatch = useDispatch();
  const {
    id,

    itemNumber,
  } = menu.menu;

  return (
    <div className={`${menu.cssStyle}`}>
      <button
        onClick={() => {
          dispatch(removeCart(id));
        }}
        className={"cursor-pointer rounded-m text-green-400 text-sm mx-3 "}
      >
        -
      </button>
      <h3 className="text-xs ">{itemNumber}</h3>
      <button
        onClick={() => {
          const item = { ...menu.menu, itemNumber: 1 };
          dispatch(addCart(item));
        }}
        className={"cursor-pointer rounded-md  text-green-400 text-sm mx-3"}
      >
        +
      </button>
    </div>
  );
}

export default CartItem;
