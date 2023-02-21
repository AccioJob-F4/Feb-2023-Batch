import logo from "./logo.svg";

import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Hola",
  },
  {
    id: 2,
    title: "Bola",
  },
  {
    id: 3,
    title: "Chola",
  },
];

function App() {
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    const updatedData = data.map((post) => {
      post.likes = 0;
      return post;
    });

    setPosts(updatedData);
  }, []);

  const handleLike = (id) => {
    const updatedData = posts.map((post) => {
      if (post.id === id) post.likes = post.likes + 1;

      return post;
    });

    setPosts(updatedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              id={post.id}
              likes={post.likes}
              handleLike={handleLike}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
