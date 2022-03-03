import React from "react";

export default function Pagination({
  goBack,
  onFirstPage,
  pageIndex,
  goToNext,
  onLastPage,
}) {
  return (
    <div className="paginationBtn">
      <button onClick={goBack} disabled={onFirstPage}>
        Previous
      </button>
      <span>{pageIndex}</span>
      <button onClick={goToNext} disabled={onLastPage}>
        Next
      </button>
    </div>
  );
}
