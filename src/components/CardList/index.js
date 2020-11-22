import React, { useEffect, useState, useContext, useReducer } from "react";
import { Card } from "../Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Search } from "../Search.js";
import { StyledCardListWrapper, StyledMoviesWrapper } from "./CardList.style";
import { MovieContex } from "../../Router/App";

export const CardList = (props) => {
  const { fetchMovies, movieList, setSearchedValue } = useContext(MovieContex);

  return (
    <div>
      <StyledCardListWrapper>
        <div style={{ color: "white" }}>
          <button style={{ marginLeft: 20 }}>
            <Link
              to="/favorites"
              style={{ color: "red", textDecoration: "none" }}
            >
              Favorites
            </Link>
          </button>
        </div>
        <ReactPaginate
          pageCount={Math.ceil(movieList.length / 3)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchMovies(data.selected + 1)}
          containerClassName="pagination"
        />
        <Search onSearch={(val) => setSearchedValue(val)} />
      </StyledCardListWrapper>
      <StyledMoviesWrapper>
        {movieList &&
          movieList.map((movie, index) => {
            return <Card movie={movie} key={index} />;
          })}
      </StyledMoviesWrapper>
      <ReactPaginate
        pageCount={Math.ceil(movieList.length / 3)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => fetchMovies(data.selected + 1)}
        containerClassName="pagination"
      />
    </div>
  );
};
