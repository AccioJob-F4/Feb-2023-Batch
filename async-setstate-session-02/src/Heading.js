import React from "react";

const Heading = ({ message, imgUrl }) => {
  return (
    <div>
      <h1>{message}</h1>
      <img src={imgUrl} />
    </div>
  );
};

export default Heading;
