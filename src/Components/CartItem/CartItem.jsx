import React from "react";
import { addCart, removeCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (menu) => {
  const dispatch = useDispatch();
  const { id, itemNumber } = menu.menu;

  const handleRemoveItem = () => {
    dispatch(removeCart(id));
  };

  const handleAddItem = () => {
    const item = { ...menu.menu, itemNumber: 1 };
    dispatch(addCart(item));
  };

  return (
    <div className={`${menu.cssStyle}`}>
      <button
        onClick={handleRemoveItem}
        className={"cursor-pointer rounded-m text-green-400 text-sm mx-3 "}
      >
        -
      </button>
      <h3 className="text-xs ">{itemNumber}</h3>
      <button
        onClick={handleAddItem}
        className={"cursor-pointer rounded-md  text-green-400 text-sm mx-3"}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
