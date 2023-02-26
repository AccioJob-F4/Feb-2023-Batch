import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Card.css";

const Card = ({ movieData }) => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <img src={movieData.Poster} className="card-img" />
      <div className="card-txt">Title : {movieData.Title}</div>
      <div className="card-txt">Type : {movieData.Type}</div>
      <div className="card-txt">Year : {movieData.Year}</div>
      {/* <button
        className="card-btn"
        onClick={() => {
          navigate(`/movies/${movieData.imdbID}`);
        }}
      >
        Know More
      </button> */}

      <Link to={`/movies/${movieData.imdbID}`}>
        <button className="card-btn">Know More</button>
      </Link>
    </div>
  );
};

export default Card;
