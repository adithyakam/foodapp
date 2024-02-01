import React, { useState, useEffect } from "react";
import { searchAPI } from "../utils/utils";
import SearchResults from "../SearchResults/SearchResults";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchResCard from "../SearchResCard/SearchResCard";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [resultSuggestion, setresultSuggestion] = useState("");

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const searchquery = searchParams.get("query");

  const onSearchRes = async (e) => {
    e.preventDefault();

    const api = await fetch(searchAPI + searchText)
      .then((res) => res.json())
      .then((res) => {
        setsearchResults(res.data.suggestions);
        navigate("/search?query=" + searchText);
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

      {searchquery ? (
        searchResults.length > 0 ? (
          <div className="w-[40%] mt-4 p-2">
            {searchResults.map((suggestion, i) => {
              return (
                <SearchResults
                  setresultSuggestion={setresultSuggestion}
                  suggestion={suggestion}
                  key={i}
                />
              );
            })}
          </div>
        ) : null
      ) : (
        <SearchResCard />
      )}
    </div>
  );
};

export default Search;
