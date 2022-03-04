import React from "react";

export default function Pagination({goBack, onFirstPage, pageIndex, news, goToNext, onLastPage, newsDetails}) {

  return (
    <div className="paginationBtn">
      {!onFirstPage &&
        <button className="paginationBtn1" onClick={goBack} disabled={onFirstPage}>
        Previous
      </button>
      }
      <span>
        {pageIndex} of {newsDetails.nbPages}
      </span>
      {!onLastPage &&
        <button className="paginationBtn2" onClick={goToNext} disabled={onLastPage}>
        Next
      </button>}
      
    </div>
  );
}
