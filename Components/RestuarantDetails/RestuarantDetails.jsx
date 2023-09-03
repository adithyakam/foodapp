import React, { useEffect, useState } from "react";
import "./RestuarantDetails.css";
import { apiRestuarants } from "../utils/utils";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { resdata } from "../utils/demo";
import star from "../../assets/star.svg";
import rupee from "../../assets/rupee.svg";
import time from "../../assets/time.svg";
import MenuCategory from "../MenuCategory/MenuCategory";
import { uuid } from "uuidv4";
import { Toggle } from "../Toggle/Toggle";

function RestuarantDetails() {
  const parms = useParams();

  const [resInfo, setresInfo] = useState(null);
  const [isveg, setisveg] = useState(false);

  const getDetails = async () => {
    await fetch(apiRestuarants + parms.id)
      .then((res) => res.json())
      .then((res) => {
        setresInfo(res);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

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

  const { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log("Toggled:", isveg);

  return (
    <div className="restuarant-detail-container">
      <div className="resturarnt-info">
        <div className="restuarant-info-content-container">
          <h1 className="restuarant-info-name">{name}</h1>
          <h5 className="restuarant-info-cuisines">{cuisines.join(", ")}</h5>
          <h5 className="restuarant-info-area">{areaName}</h5>
        </div>
        <div className="restuarant-info-rating-container">
          <h1 className="restuarant-info-rating">
            <img src={star} className="rescardstar" />
            {avgRatingString}
          </h1>

          <h1 className="restuarant-info-ratingcount">{totalRatingsString}</h1>
        </div>
      </div>
      <hr className="restuarant-detail-hr" />
      <div className="restuarant-offers-container">
        <h1 className="restuarant-offers-time">
          <img src={time} className="rescardstar" />
          {deliveryTime} MINS
        </h1>
        <h1 className="restuarant-offers-price">
          <img src={rupee} className="rescardstar" />
          {costForTwo / 100} for two
        </h1>
      </div>
      <div className="restuarant-veg-btn-container">
        <h3 className="restuarant-veg">Veg Only</h3>
        <Toggle
          label="Toggle me"
          toggled={isveg}
          onClick={() => setisveg(!isveg)}
        />
      </div>
      <hr className="restuarant-detail-hr2" />
      <div className="restuarants-menu">
        {cards.slice(1, -2).map((card, i) => {
          return <MenuCategory key={uuid()} card={card.card} isveg={isveg} />;
        })}
      </div>
    </div>
  );
}

export default RestuarantDetails;
