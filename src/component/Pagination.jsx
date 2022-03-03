import React from 'react'

export default function Pagination({goBack, onFirstPage, pageIndex, news, goToNext, onLastPage}) {
  return (
    <div className="paginationBtn">
      <button onClick={goBack} disabled={onFirstPage}>
        Previous
      </button>
      <span>
        {pageIndex} of {news.length}
      </span>
      <button onClick={goToNext} disabled={onLastPage}>
        Next
      </button>
    </div>
  );
}
