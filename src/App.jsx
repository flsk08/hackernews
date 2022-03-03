import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./component/Post";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Searchbar from "./component/Searchbar";
import Pagination from "./component/Pagination";

function App() {
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("react");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [newsDetails, setNewsDetails] = useState(0);

  // console.log(userInput);
  // console.log("newsstate", news);
  //console.log("isLoading", isLoading);
  console.log("page", pageIndex);

  useEffect(() => {
    setIsLoading(true);
    const getNews = async () => {
      try {
        const resp = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${topic}&page=${pageIndex}`
        );
        setNews(resp.data.hits);
        setNewsDetails(resp.data);
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
    setPageIndex(1);
  };

  const goBack = () => {
    setPageIndex((prevPageIndex) => prevPageIndex - 1);
  };

  const goToNext = () => {
    setPageIndex((prevPageIndex) => prevPageIndex + 1);
  };

  const onFirstPage = pageIndex === 1;
  const onLastPage = pageIndex === news.length - 1;

  return (
    <div className="App">
      <h1>Hacker News</h1>
      <Searchbar
        handleClick={handleClick}
        userInput={userInput}
        setUserInput={setUserInput}
      />
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
        {news.length === 0 && isLoading === false && (
          <>
          <div className="NoResults">Sorry <span role="img" aria-label="sad"><p>&#128577;</p></span>, we could't find any results for: <br/>"{topic}"
            </div>
          <div className="NoResultsP">
            <ul>
            <li>Please double-check the spelling.</li>
            <li>Try other search terms.</li>
            </ul>
          </div>
          </>
        )}

      </div>
      {news.length !== 0 && isLoading === false && (
        <Pagination
          newsDetails={newsDetails}
          goBack={goBack}
          onFirstPage={onFirstPage}
          pageIndex={pageIndex}
          news={news}
          goToNext={goToNext}
          onLastPage={onLastPage}
        />
      )}
    </div>
  );
}

export default App;
