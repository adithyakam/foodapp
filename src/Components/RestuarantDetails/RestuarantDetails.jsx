import React, { useEffect, useState } from "react";
import "./RestuarantDetails.css";
import { apiRestuarants } from "../utils/utils";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { resdata } from "../utils/demo";
import star from "../../assets/star.svg";
import rupee from "../../assets/rupee.svg";
import time from "../../assets/time.svg";
import offer from "../../assets/offers.svg";

import MenuCategory from "../MenuCategory/MenuCategory";
import { Toggle } from "../Toggle/Toggle";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addRes } from "../Redux/restuarantSlice";
// import offerlogo from "../../assets/offers.svg";

function RestuarantDetails() {
  const parms = useParams();

  const dispatch = useDispatch();

  const resInfo = useFetch(`${apiRestuarants + parms.id}`);

  // const [resInfo, setresInfo] = useState(null);
  const [isveg, setisveg] = useState(false);
  const [categoryitemindex, setcategoryitemindex] = useState(0);
  const [iscategorydropdownopen, setiscategorydropdownopen] = useState(false);

  const menuOpen = (index) => {
    index == categoryitemindex
      ? setcategoryitemindex(-1)
      : setcategoryitemindex(index);
  };

  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const {
    info: {
      name,
      city,
      costForTwo,
      areaName,
      cuisines,
      avgRatingString,
      totalRatingsString,
      sla: { deliveryTime },
    },
  } = resInfo?.data?.cards[0]?.card?.card;

  dispatch(
    addRes({
      name,
      city,
      costForTwo,
      areaName,
      cuisines,
      avgRatingString,
      totalRatingsString,
      deliveryTime,
    })
  );

  const { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const { offers } =
    resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="w-1/2 m-auto">
      <div className="flex justify-between items-center mt-4 mt-3">
        <div className="ml-0">
          <h1 className="text-base font-bold">{name}</h1>
          <h5 className="text-xs m-2 ml-0 font-light">{cuisines.join(", ")}</h5>
          <h5 className="text-xs m-2 ml-0 font-light">{areaName}</h5>
        </div>
        <div className="border-neutral-600 p-1 shadow rounded-md max-w-[70] h-16">
          <h1 className="text-base flex items-center text-green-600 border-b-2 m-0 p-1 justify-center">
            <img src={star} className="mr-1" />
            {avgRatingString}
          </h1>

          <h1 className="text-[11px] w-full tracking-tighter	p-1">
            {totalRatingsString}
          </h1>
        </div>
      </div>
      <hr className="restuarant-detail-hr mt-2" />
      <div className="flex items-start ">
        <h1 className="text-base flex items-center mx-4 my-3 font-bold ml-0 ">
          <img src={time} className="mr-3 h-4 w-4" />
          {deliveryTime} MINS
        </h1>
        <h1 className="text-base flex items-center mx-4 my-3 font-bold ml-0 ">
          <img src={rupee} className="mr-3 h-4 w-4" />
          {costForTwo / 100} for two
        </h1>
      </div>
      <div className="flex overflow-x-scroll flex-no-wrap items-start  no-scrollbar mb-4 p-2">
        {offers.map((data) => {
          return (
            <div
              className="w-90 h-15  p-2 	border-1	mr-5 flex-none shadow-md"
              key={data.info.header}
            >
              <div className="flex items-center">
                <img src={offer} className="w-6 h-6 text-orange-900" />
                <h3 className="text-[12px] font-semibold ml-2 break-keep  text-orange-900">
                  {data.info.header}
                </h3>
              </div>
              <div className="flex items-center">
                <h3 className="text-[10px] ">
                  {data.info.couponCode} |{data.info.description}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex  items-start ">
        <h3 className="text-sm font-semibold mr-2 ">Veg Only</h3>
        <Toggle
          label="Toggle me"
          toggled={isveg}
          onClick={() => setisveg(!isveg)}
        />
      </div>
      <hr className="restuarant-detail-hr2 mt-2" />
      <div className="mt-4">
        {cards.slice(1, -2).map((card, i) => {
          return (
            <MenuCategory
              key={card.card.card.title}
              card={card.card}
              isveg={isveg}
              menuOpen={menuOpen}
              index={i}
              iscategorydropdownopen={i == categoryitemindex ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestuarantDetails;
