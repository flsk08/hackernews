import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./component/Post";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("react");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log(userInput);
  // console.log("newsstate", news);
  console.log("isLoading", isLoading);

  useEffect(() => {
    setIsLoading(true);
    const getNews = async () => {
      try {
        const resp = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${topic}`
        );
        setNews(resp.data.hits);
        setIsLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setIsLoading(false);
      }
    };
    getNews();
  }, [topic]);

  // fetch(`http://hn.algolia.com/api/v1/search?query=${topic}&page=${page}`)
  //     .then((response) => response.json())
  //     .then((data) => setNews(data.hits))
  //     setIsLoading(false)
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  const handleClick = () => {
    setTopic(userInput);
    setUserInput("");
  };

  return (
    <div className="App">
      <h1>Hacker News</h1>
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleClick} className="searchBtn">
        Search
      </button>
      <div className="posts">
        {/* {isLoading && <Spinner animation="border" />}
        {!isLoading &&
          news.map((post) => (
            <Post
              key={post.objectID}
              objectID={post.objectID}
              title={post.title}
              author={post.author}
              url={post.url}
              numOfComments={post.num_comments}
              points={post.points}
            />
          ))} */}

        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          news.map((post) => (
            <Post
              key={post.objectID}
              objectID={post.objectID}
              title={post.title}
              author={post.author}
              url={post.url}
              numOfComments={post.num_comments}
              points={post.points}
            />
          ))
        )}
        {news.length === 0 && isLoading === false && <div>nix gefunden</div>}
      </div>
    </div>
  );
}

export default App;
