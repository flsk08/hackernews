import React from "react";

export default function Searchbar({handleClick, userInput, setUserInput}) {
  return (
    <div>
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
      ;
    </div>
  );
}
