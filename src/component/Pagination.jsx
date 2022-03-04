import React from "react";

export default function Pagination({goBack, onFirstPage, pageIndex, news, goToNext, onLastPage, newsDetails}) {

  return (
    <div className="paginationBtn">
      {!onFirstPage &&
        <button onClick={goBack} disabled={onFirstPage}>
        Previous
      </button>
      }
      <span>
        {pageIndex} of {newsDetails.nbPages}
      </span>
      {!onLastPage &&
        <button onClick={goToNext} disabled={onLastPage}>
        Next
      </button>}
      
    </div>
  );
}
