import React, { useEffect, useState } from "react";
import "./RestuarantDetails.css";
import { apiRestuarants } from "../utils/utils";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { resdata } from "../utils/demo";

function RestuarantDetails() {
  const parms = useParams();

  const [resInfo, setresInfo] = useState(resdata);
console.log(resInfo);

  const getDetails = async () => {
    await fetch(apiRestuarants + parms.id)
      .then((res) => res.json())
      .then((res) => {
        setresInfo(res);
      });
  };

  useEffect(() => {
    // getDetails();
  }, []);

  if (resInfo === null) return <Shimmer />;

  return <div>RestuarantDetails</div>;
}

export default RestuarantDetails;
