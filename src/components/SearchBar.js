import React from "react";
import SearchIcon from "../assets/search.svg";

const SearchBar = ({ searchTerm, setSearchTerm, searchMovies }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchMovies(searchTerm);
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
