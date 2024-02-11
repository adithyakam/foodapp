import React from "react";
import "./RestuarantCard.css";
import { imageURL } from "../utils/utils";
import star from "../../assets/star.svg";

function RestuarantCard(props) {
  const { name, area, avgRating, cloudinaryImageId, cuisines } = props;
  return (
    <div className="w-64 h-80 flex flex-col  items-center my-1.5 mx-0.5 cursor-pointer border-0 rounded-2xl hover:scale-[1.1]">
      <div className=" h-40 w-64">
        <img
          src={`${imageURL}${cloudinaryImageId}`}
          className="rounded-2xl w-full h-full object-fill"
        />
      </div>
      <div className="items-start w-full mt-2 ml-4 w-64">
        <h1 className="font-bold text-base ml-0 overflow-hidden text-ellipsis block whitespace-nowrap">
          {name}
        </h1>
        {/* <h6 className='rescardarea'>{area}</h6> */}
        <h3 className="flex items-center justify-start">
          <img src={star} className="text-lg mr-2" />
          {avgRating}
        </h3>
        <h3 className="text-base overflow-hidden text-ellipsis block whitespace-nowrap">
          {cuisines.join(", ")}
        </h3>
      </div>
    </div>
  );
}

export function RestuarantCardPopular(props) {
  const { name, area, avgRating, cloudinaryImageId, cuisines } = props;
  return (
    <div className="w-64 h-80 flex flex-col items-center my-1.5 mx-0.5 cursor-pointer border-0 rounded-2xl hover:scale-[1.1] relative">
      <h6 className=" absolute top-0 w-3/12 left-[-4px] bg-slate-800 text-slate-200 rounded-md p-1 text-xs">
        Popular
      </h6>
      <div className="w-full ">
        <img src={`${imageURL}${cloudinaryImageId}`} className="rounded-2xl" />
      </div>
      <div className="items-start w-full mt-2 ml-4 ">
        <h1 className="font-bold text-base ml-0 overflow-hidden text-ellipsis block whitespace-nowrap">
          {name}
        </h1>
        {/* <h6 className='rescardarea'>{area}</h6> */}
        <h3 className="flex items-center justify-start">
          <img src={star} className="text-lg mr-2" />
          {avgRating}
        </h3>
        <h3 className="text-base overflow-hidden text-ellipsis block whitespace-nowrap">
          {cuisines.join(", ")}
        </h3>
      </div>
    </div>
  );
}

export function RestuarantCardSearch(props) {
  const { name, area, avgRating, cloudinaryImageId, cuisines } = props;
  return (
    <div className="border border-2  h-40 flex items-center my-1.5 mx-0.5 cursor-pointer border-0 rounded-2xl hover:scale-[1.1] relative">
      <div className="">
        <img
          src={`${imageURL}${cloudinaryImageId}`}
          className="rounded-sm h-20 w-20"
        />
      </div>
      <div className="items-start w-[30%] mt-2 ml-4 ">
        <h1 className="font-bold text-base ml-0 overflow-hidden text-ellipsis block whitespace-nowrap">
          {name}
        </h1>
        {/* <h6 className='rescardarea'>{area}</h6> */}
        <h3 className="flex items-center justify-start">
          <img src={star} className="text-lg mr-2" />
          {avgRating}
        </h3>
        <h3 className="text-base overflow-hidden text-ellipsis block whitespace-nowrap">
          {cuisines.join(", ")}
        </h3>
      </div>
    </div>
  );
}

export default RestuarantCard;
