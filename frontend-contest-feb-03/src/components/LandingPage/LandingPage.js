import React, { useState } from "react";

import { searchUrlGenerator } from "../../utils";
import { client } from "../../client";
import "./LandingPage.css";
import Nav from "../Nav/Nav";
import Card from "../ui/Card/Card";

const LandingPage = () => {
  const [searchInp, setSearchInp] = useState("");
  const [error, setError] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const handleChange = (e) => {
    setSearchInp(e.target.value);
  };

  const handleSearch = () => {
    setError(false);
    client.get(searchUrlGenerator(searchInp)).then((resp) => {
      if (resp.data.Error) {
        setError(true);
        setMoviesList([]);
      } else setMoviesList(resp.data.Search);
    });
  };

  return (
    <div>
      <Nav />
      <div className="search-container">
        <div className="search-label">Search for movies by their title</div>
        <input
          type="text"
          value={searchInp}
          onChange={handleChange}
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search Now!
        </button>
      </div>

      {searchInp && (
        <div className={error ? "error" : "success"}>
          {error
            ? `No movie found for title ${searchInp}`
            : `Movie Results for '${searchInp}'`}
        </div>
      )}

      <div className="movie-list">
        {moviesList.map((movie) => (
          <Card key={movie.imdbID} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
