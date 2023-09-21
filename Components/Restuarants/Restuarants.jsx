import React, { useEffect, useState } from "react";
import RestuarantCard, {
  RestuarantCardPopular,
} from "../RestuarantCard/RestuarantCard";
import { apiURL, menuimage } from "../utils/utils";
import "./Restuarants.css";
import SearchBar from "../SearchBar/SearchBar";
import { data } from "../utils/demo";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

const Restuarants = () => {
  const [resinfoapi, setresinfoapi] = useState({});
  // const [restuarants, setrestuarants] = useState([]);
  const [restuarantList, setrestuarantList] = useState([]);
  // const [whatsonmind, setwhatsonmind] = useState([]);
  // const [topres, settopres] = useState([]);

  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestuarants();
  }, []);

  useEffect(() => {
    filterSearchRestuatrants();
  }, [searchText]);

  {
    if (loading) {
      return <Shimmer />;
    }
  }

  const restuarants =
    resinfoapi.data?.cards[5].card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const whatsonmind =
    resinfoapi.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.info;

  const topres =
    resinfoapi.data?.cards[2].card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  // useEffect(()=>{

  // },searchText)

  const getRestuarants = async () => {
    await fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        setresinfoapi(res);
        setrestuarantList(
          res.data?.cards[5].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setloading(false);
      });
  };

  const getSearchText = (e) => {
    setSearchText(e);
  };

  const filterSearchRestuatrants = () => {
    const newresList = restuarants?.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setrestuarantList(newresList);
  };

  //  restuarantList = restuarants?;

  return (
    <div className="w-3/4 m-auto mt-8">
      {/* <SearchBar getSearchText={getSearchText} searchtext={searchText}/> */}
      <div className="w-full m-auto z-10">
        <h1 className="font-semibold text-base text-slate-900">
          Whats On Mind?
        </h1>
        <div className=" flex  overflow-x-scroll w-full space-x-2 no-scrollbar">
          {whatsonmind?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col flex-shrink-0 justify-center items-center hover:scale-105"
              >
                <img
                  src={menuimage + item.imageId}
                  className="w-36 h-40 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full m-auto z-10">
        <h1 className="font-semibold text-base text-slate-900 mb-2">
          Top restaurant chains
        </h1>
        <div className=" flex flex-nowrap items-center overflow-x-scroll w-full space-x-2 no-scrollbar">
          {topres?.map((item) => {
            return (
              <Link to={"/restuarants/" + item.info.id}>
                <RestuarantCard
                  name={item.info.name}
                  key={item.info.name}
                  area={item.info.areaName}
                  avgRating={item.info.avgRating}
                  cuisines={item.info.cuisines}
                  cloudinaryImageId={item.info.cloudinaryImageId}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full m-auto z-10">
        <h1 className="font-semibold text-base text-slate-900 mb-2">
          Top restaurant chains
        </h1>
        <div className="flex flex-wrap justify-around w-full m-auto">
          {restuarantList?.map(
            ({
              info: {
                name,
                areaName,
                avgRating,
                cloudinaryImageId,
                cuisines,
                id,
              },
            }) => {
              return avgRating > 4 ? (
                <Link to={"/restuarants/" + id}>
                  <RestuarantCardPopular
                    name={name}
                    key={name}
                    area={areaName}
                    avgRating={avgRating}
                    cuisines={cuisines}
                    cloudinaryImageId={cloudinaryImageId}
                  />
                </Link>
              ) : (
                <Link to={"/restuarants/" + id}>
                  <RestuarantCard
                    name={name}
                    key={name}
                    area={areaName}
                    avgRating={avgRating}
                    cuisines={cuisines}
                    cloudinaryImageId={cloudinaryImageId}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Restuarants;
