import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getPostsData();
  }, [pageNo]);

  const handleLikes = (id) => {
    const updatedPosts = posts?.map((postObj) => {
      if (postObj.id === id) postObj.likes = postObj.likes + 1;
      return postObj;
    });
    setPosts(updatedPosts);
  };

  useEffect(() => {
    handleFilter();
  }, [searchTitle]);

  const getPostsData = () => {
    try {
      fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=20`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const updatedPosts = data?.map((postObj) => {
            postObj.likes = 0;
            return postObj;
          });

          const mergedPosts = [...posts, ...updatedPosts];
          setPosts(mergedPosts);
          setFilteredPosts(mergedPosts);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = () => {
    let updatedPosts = [...posts];

    if (posts.length > 0)
      updatedPosts = posts.filter((postObj) => {
        if (postObj.title.includes(searchTitle)) return postObj;
      });

    setFilteredPosts(updatedPosts);
  };

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleMorePosts = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div>
      <Search value={searchTitle} onChange={handleChange} />
      <div className="postsContainer">
        {filteredPosts.length > 0
          ? filteredPosts.map((postObj) => (
              <Card
                key={postObj.id}
                id={postObj.id}
                title={postObj.title}
                likes={postObj.likes}
                imgUrl={`https://picsum.photos/200?random=${postObj.id}`}
                handleLikes={handleLikes}
              />
            ))
          : "Loading ..."}
      </div>

      <button onClick={handleMorePosts}>Load more posts</button>
    </div>
  );
};

export default App;
