import React from "react";
import { Link, Navigate } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87"
        alt="error-page"
        className="w-[30%] h-[30%] object-contain"
      />
      <h1 className="font-bold my-2">Something went wrong</h1>
      <Link
        to={"/"}
        className="bg-orange-500 text-white font-semibold p-1 rounded-md"
      >
        <h3 className="text-white my-2">GO home</h3>
      </Link>
    </div>
  );
};

export default Error;
