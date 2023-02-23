import React, { useState } from "react";

const Card = ({ id, title, likes, handleLike }) => {
  //   const [likes, setLikes] = useState(0);
  return (
    <div>
      <div>Card Id : {id} </div>
      <div>Card Title : {title} </div>
      <div>Card Likes : {likes} </div>

      <button onClick={() => handleLike(id)}> + Like</button>
      <hr />
      <hr />
    </div>
  );
};

export default Card;
