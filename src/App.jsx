import "./App.css";
import React, { useState } from "react";
import Post from "./component/Post";
import data from "./mockdata.json";
// import Searchbar from "./component/Searchbar";

function App() {
  const [news, setNews] = useState(data.hits);
  console.log("newsstate", news);
  return (
    <div className="App">
      <div className="searchbar">{/* <Searchbar /> */}</div>
      <div className="posts">
        {news.map((post) => (
          <Post
            key={post.objectID}
            objectID={post.objectID}
            title={post.title}
            author={post.author}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
