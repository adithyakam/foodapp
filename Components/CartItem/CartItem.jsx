import React from "react";
import { addCart, removeCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem(menu, cssStyle) {
  const dispatch = useDispatch();
  const {
    id,

    itemNumber,
  } = menu.menu;
  console.log(cssStyle);

  return (
    <div className={`${cssStyle}`}>
      <button
        onClick={() => {
          dispatch(removeCart(id));
        }}
        className={"cursor-pointer rounded-m text-green-400 text-sm mx-3 "}
      >
        -
      </button>
      {itemNumber}
      <button
        onClick={() => {
          const item = { ...menu.menu, itemNumber: 1 };
          console.log(item, menu, "dad");
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
