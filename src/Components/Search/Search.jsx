import React, { useState, useEffect } from "react";
import { searchAPI } from "../utils/utils";
import SearchResults from "../SearchResults/SearchResults";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchResCard from "../SearchResContainer/SearchResContainer";
import SearchResContainer from "../SearchResContainer/SearchResContainer";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [resultSuggestion, setresultSuggestion] = useState(false);

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const searchquery = searchParams.get("query");

  const onSetResultSuggestion = () => {
    setresultSuggestion(true);
  };

  const getSearchRes = async (dish) => {
    const api = await fetch(searchAPI + dish)
      .then((res) => res.json())
      .then((res) => {
        setsearchResults(res?.data?.suggestions);
        navigate("/search?query=" + dish);
      });
  };

  const onSearchRes = async (e) => {
    e.preventDefault();

    getSearchRes(searchText);
  };

  useEffect(() => {
    if (searchquery) {
      setsearchText(searchquery);
      getSearchRes(searchquery);
    }
  }, []);

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

      {!resultSuggestion ? (
        searchResults?.length > 0 ? (
          <div className="w-[40%] mt-4 p-2">
            {searchResults.map((suggestion, i) => {
              return (
                <SearchResults
                  onSetResultSuggestion={onSetResultSuggestion}
                  suggestion={suggestion}
                  key={i}
                />
              );
            })}
          </div>
        ) : null
      ) : (
        <div className="w-[60%] mt-4">
          <SearchResContainer searchText={searchText} />
        </div>
      )}
    </div>
  );
};

export default Search;
