import React from "react";
import "./Menu.css";
import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/non-veg.svg";
import bestseller from "../../assets/star-yellow.svg";
import { menuimage } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";

import { addCart, clearCart } from "../Redux/cartSlice";
import { addResCart } from "../Redux/cartrestuarantSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "../CartItem/CartItem";

const Menu = (props) => {
  const {
    info: {
      name,
      price,
      inStock,
      isVeg,
      imageId,
      isBestseller,
      description,
      id,
    },
    isopen,
    vegonly,
  } = props;

  const dispatch = useDispatch();
  const rescartinfo = useSelector((state) => state.cartres.restuarant);
  const resinfo = useSelector((state) => state.restuarant.restuarant);
  const cart = useSelector((state) => state.cart.items);

  const cartCTA = () => {
    const items = { ...props.info, itemNumber: 1 };

    if (resinfo.name == rescartinfo.name) {
      dispatch(addCart(items));
    } else {
      setTimeout(() => {
        toast.success("Restuarant Changed ", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          theme: "light",
        });
      }, 0);

      dispatch(clearCart());
      dispatch(addResCart(resinfo));
      dispatch(addCart(items));
    }
  };

  const existingCartItemIndex = cart?.findIndex(
    (cartItem) => cartItem.id === id
  );

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

          <div className="relative mx-auto">
            {imageId ? (
              <img
                src={`${menuimage}${imageId}`}
                className="h-24 w-32 rounded-md shadow object-cover  "
              />
            ) : (
              <></>
            )}

            {existingCartItemIndex !== -1 ? (
              <CartItem
                menu={cart[existingCartItemIndex]}
                cssStyle={
                  imageId
                    ? " flex flex-nowrap items-center justify-around absolute rounded-md border-green-300 bottom-[-5%] right-[10%] m-auto w-[80%] p-1 b-0 text-green-400 text-sm shadow-md cursor-pointer bg-slate-50"
                    : " flex flex-nowrap items-center justify-around cursor-pointer border-green-300 rounded-md  m-auto w-24 p-1 b-0 bg-slate-50 text-green-400 text-sm shadow-md"
                }
              />
            ) : (
              <button
                onClick={cartCTA}
                className={
                  imageId
                    ? "absolute rounded-md border-green-300 bottom-[-5%] right-[10%] m-auto w-[80%] p-1 b-0 text-green-400 text-sm shadow-md cursor-pointer bg-slate-50"
                    : "cursor-pointer border-green-300 rounded-md m-auto w-24 p-1 b-0 bg-slate-50 text-green-400 text-sm shadow-md"
                }
              >
                Add
              </button>
            )}
          </div>
          <ToastContainer />
        </div>
      </>
    );
  };

  return vegonly ? isVeg ? <MenuComponent /> : null : <MenuComponent />;
};

export default Menu;
