import React from "react";

import "./Card.css";

const Card = ({ title, children }) => {
  return (
    <div className="cardContainer">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
