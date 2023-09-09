import React from "react";
import "./RestuarantCard.css";
import { imageURL } from "../utils/utils";
import star from "../../assets/star.svg";

function RestuarantCard(props) {
  const { name, area, avgRating, cloudinaryImageId, cuisines } = props;
  return (
    <div className="w-64 h-80 flex flex-col items-center my-1.5 mx-0.5 cursor-pointer border-0 rounded-2xl hover:scale-[1.1]">
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

export default RestuarantCard;
