import React from "react";

import "./Card.css";

const Card = ({ imgUrl, id, title, likes, handleLikes }) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={imgUrl} />
      </div>
      <div className="cardText">UserID : {id}</div>
      <div className="cardText">Title : {title}</div>
      <div className="cardText">Likes : {likes}</div>
      <button
        className="cardBtn"
        onClick={() => {
          handleLikes(id);
        }}
      >
        Like Post
      </button>
    </div>
  );
};

export default Card;
