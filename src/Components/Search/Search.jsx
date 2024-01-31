import React, { useState, useEffect } from "react";
import { searchAPI } from "../utils/utils";
import SearchResults from "../SearchResults/SearchResults";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  const onSearchRes = async (e) => {
    e.preventDefault();
    const api = await fetch(searchAPI + searchText)
      .then((res) => res.json())
      .then((res) => {
        setsearchResults(res.data.suggestions);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-y-scroll">
      <form
        onSubmit={onSearchRes}
        className="mt-2 w-[80%] flex flex-col items-center"
      >
        <input
          className="w-[50%] border border-black mx-auto h-12 p-2"
          placeholder="Search for Restuarants and food "
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
      </form>
      {searchResults.length > 0 ? (
        <div className="w-[40%] mt-4 p-2">
          {searchResults.map((suggestion, i) => {
            return <SearchResults suggestion={suggestion} key={i} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
