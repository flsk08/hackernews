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
  const [pageIndex, setPageIndex] = useState(1);

  // console.log(userInput);
  // console.log("newsstate", news);
  console.log("isLoading", isLoading);

  useEffect(() => {
    setIsLoading(true);
    const getNews = async () => {
      try {
        const resp = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${topic}&page=${pageIndex}`
        );
        setNews(resp.data.hits);
        setIsLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setIsLoading(false);
      }
    };
    getNews();
  }, [topic, pageIndex]);

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
    //newcode
    setPageIndex(1);
  };

  const onFirstPage = pageIndex === 1;
  const onLastPage = pageIndex === news.length - 1;

  //here define event handlers
  const goBack = () => setPageIndex(prevPageIndex => prevPageIndex - 1);
  const goNextPage = () => setPageIndex(prevPageIndex => prevPageIndex + 1)


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
        {isLoading && <Spinner animation="border" />}
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
          ))}

      {/*   {isLoading ? (
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
        )} */}
        {news.length === 0 && isLoading === false && <div>nix gefunden</div>}
      </div>
     {!isLoading && news.length !== 0 && (<div>
        <button onClick={goBack} disabled={onFirstPage}>
          Go Back
        </button>
         {pageIndex} of {news.length} 
        <button onClick={goNextPage} disabled={onLastPage}>
          Next Page
        </button>
        </div>)}
    </div>
  );
}

export default App;
