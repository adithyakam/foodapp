import React, { useEffect, useState } from "react";
import { searchResultRestuarant } from "../utils/utils";
import { RestuarantCardSearch } from "../RestuarantCard/RestuarantCard";
import { Link } from "react-router-dom";

const SearchResContainer = ({ searchText }) => {
  const [resSearch, setresSearch] = useState([]);

  const getData = async () => {
    await fetch(searchResultRestuarant)
      .then((res) => res.json())
      .then((data) =>
        setresSearch(
          data.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(resSearch);
  if (resSearch.length === 0) <div>Loading....</div>;

  return (
    <div className=" p-10 flex flex-wrap justify-around w-full">
      {resSearch.map((item) => {
        return (
          <>
            <Link
              to={"/restuarants/" + item.card.card.info.id}
              key={item.card.card.info.name}
              className="w-[50%]"
            >
              <RestuarantCardSearch
                name={item.card.card.info.name}
                area={item.card.card.info.areaName}
                avgRating={item.card.card.info.avgRating}
                cuisines={item.card.card.info.cuisines}
                cloudinaryImageId={item.card.card.info.cloudinaryImageId}
                data-testid="top-res"
              />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default SearchResContainer;
