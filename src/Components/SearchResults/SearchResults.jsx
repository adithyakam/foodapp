import React from "react";
import { imageURL } from "../utils/utils";

const SearchResults = ({ suggestion }) => {
  return (
    <div className="flex  w-full m-1 p-1 cursor-pointer">
      <div>
        <img
          src={imageURL + suggestion.cloudinaryId}
          className="h-16 object-fill w-16 rounded-md  "
        />
      </div>
      <div className="ml-2">
        <h3 className="text-sm">{suggestion.text}</h3>
        <h5 className="text-xs">{suggestion.type}</h5>
      </div>
    </div>
  );
};

export default SearchResults;
