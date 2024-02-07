import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { whatsonmind } from "../utils/utils";
import Shimmer from "../Shimmer/Shimmer";
import RestuarantCard from "../RestuarantCard/RestuarantCard";

const Collections = () => {
  const parms = useParams();

  const [collection, setcollection] = useState([]);

  useEffect(async () => {
    await fetch(
      whatsonmind + parms.collectionid + "&tags=&sortBy=&filters=&type=rcv2"
    )
      .then((res) => res.json())
      .then((res) => {
        setcollection(res.data.cards);
      });
  }, []);

  if (collection.length == 0) return <Shimmer />;

  const { title, description } = collection[0]?.card?.card;
  const rescards = collection.slice(2);

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3>{description}</h3>
      </div>

      <div className="flex flex-wrap justify-around mt-4">
        {rescards.map((res) => {
          const { info } = res.card.card;
          return (
            <Link to={"/restuarants/" + info.id} key={info.name}>
              <RestuarantCard
                name={info.name}
                key={info.name}
                area={info.areaName}
                avgRating={info.avgRating}
                cuisines={info.cuisines}
                cloudinaryImageId={info.cloudinaryImageId}
                data-testid="top-res"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
