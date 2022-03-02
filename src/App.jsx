import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./component/Post";

// import Searchbar from "./component/Searchbar";

function App() {
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("react");
  const [userInput, setUserInput] = useState("");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    fetch(`http://hn.algolia.com/api/v1/search?query=${topic}&page=${page}`)
      .then((response) => response.json())
      .then((data) => setNews(data.hits))
      setIsLoading(false)
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [topic, page]);

  const handleClick = () => {
    setTopic(userInput);
    userInput("");
  };

  console.log(userInput);
  console.log("newsstate", news);
  return (
    <div className="App">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <div className="posts">
        isLoading ? 
        {news.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            url={post.url}
            //numOfComments={post.num_comments}
            points={post.points}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
