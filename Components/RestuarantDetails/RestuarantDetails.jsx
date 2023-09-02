import React, { useEffect, useState } from "react";
import "./RestuarantDetails.css";
import { apiRestuarants } from "../utils/utils";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { resdata } from "../utils/demo";
import star from '../../assets/star.svg';
import rupee from '../../assets/rupee.svg';
import time from '../../assets/time.svg';


function RestuarantDetails() {
  const parms = useParams();

  const [resInfo, setresInfo] = useState(resdata);

  const getDetails = async () => {
    await fetch(apiRestuarants + parms.id)
      .then((res) => res.json())
      .then((res) => {
        setresInfo(res);
      });
  };

  const {
    info: {
      name,
      city,
      costForTwo,
      areaName,
      cuisines,
      avgRatingString,
      totalRatingsString,
      sla:{
        deliveryTime,
      }
    },
   
  } = resInfo?.data?.cards[0]?.card?.card;


  useEffect(() => {
    // getDetails();
  }, []);

  if (resInfo === null) return <Shimmer />;

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
          <img src={star} className='rescardstar'/>{avgRatingString}</h1>

          <h1 className="restuarant-info-ratingcount">{totalRatingsString}</h1>
        </div>
      </div>
      <hr className="restuarant-detail-hr"/>
      <div className="restuarant-offers-container">
      <h1 className="restuarant-offers-time">
          <img src={time} className='rescardstar'/>{deliveryTime}</h1>
          <h1 className="restuarant-offers-price">
          <img src={rupee} className='rescardstar'/>{costForTwo/100} for two</h1>
      </div>
      <div className="restuarant-veg-btn-container">
        <h3 className="restuarant-veg" >Veg Only</h3>
        <button>btn</button>
      </div>
      <hr className="restuarant-detail-hr2"/>
      <div className="restuarants-menu"></div>
    </div>
  );
}

export default RestuarantDetails;
