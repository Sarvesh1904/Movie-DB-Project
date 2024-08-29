// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
