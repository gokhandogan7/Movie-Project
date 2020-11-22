import React, { useEffect, useState, createContext, useReducer } from "react";
import { CardList } from "../components/CardList/index.js";
import axios from "axios";
import { StyledCardList } from "../components/CardList/CardList.style";

require("dotenv").config();
const apiKey = "2ab876e9698659187d8d9420ef4d232c";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
export const MovieContex = createContext();

function App() {
  const [searchedValue, setSearchedValue] = useState("Star Wars");
  const [movieList, setMovieList] = useState("");

 const fetchMovies = (pageNum = 1) => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: pageNum,
          query: searchedValue, //TODO: from input
        },
      })
      .then(({ data: { results } }) => setMovieList(results));
  };

  useEffect(() => {
    fetchMovies();
  }, [searchedValue]);


  return (
    <div className="App">
      <MovieContex.Provider
        value={{ movieList, setSearchedValue, fetchMovies }}
      >
      
        <CardList />
       
      </MovieContex.Provider>
    </div>
  );
}

export default App;
