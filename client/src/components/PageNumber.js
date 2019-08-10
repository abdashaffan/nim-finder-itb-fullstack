import React from "react";

const PageNumber = ({ total, size, currentPage, handlePageClick }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / size); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={"page-item " + (currentPage === 1 ? "disabled" : "")}
          style={{ cursor: "pointer" }}
        >
          <span
            className="page-link"
            aria-label="Previous"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </span>
        </li>
        {pageNumbers.map(num => (
          <li
            key={num}
            className={"page-item " + (currentPage === num ? "active" : "")}
            style={{ cursor: "pointer" }}
            onClick={() => handlePageClick(num)}
          >
            <span className="page-link">{num}</span>
          </li>
        ))}
        <li
          className={
            "page-item " +
            (currentPage === pageNumbers.length ? "disabled" : "")
          }
          style={{ cursor: "pointer" }}
        >
          <span
            className="page-link"
            aria-label="Next"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNumber;
