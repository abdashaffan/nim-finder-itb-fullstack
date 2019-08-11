import React from "react";

const PageNumber = ({ total, size, currentPage, handlePageClick }) => {
  const totalPageNumber = Math.ceil(total / size);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={"page-item " + (currentPage === 1 ? "disabled" : "")}
          style={{ cursor: "pointer" }}
        >
          <span
            className="page-link"
            aria-label="First"
            onClick={() => handlePageClick(1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">First</span>
          </span>
        </li>

        {currentPage > 1 && (
          <>
            <li
              className={"page-item " + (currentPage === 1 ? "disabled" : "")}
              style={{ cursor: "pointer" }}
            >
              <span
                className="page-link"
                aria-label="Previous"
                onClick={() => handlePageClick(currentPage - 1)}
              >
                {currentPage - 1}
              </span>
            </li>
          </>
        )}

        <li className="page-item disabled">
          <span className="page-link">...</span>
        </li>

        {currentPage < totalPageNumber && (
          <>
            <li
              className={
                "page-item " +
                (currentPage === totalPageNumber ? "disabled" : "")
              }
              style={{ cursor: "pointer" }}
            >
              <span
                className="page-link"
                aria-label="Next"
                onClick={() => handlePageClick(currentPage + 1)}
              >
                {currentPage + 1}
              </span>
            </li>
          </>
        )}

        <li
          className={
            "page-item " + (currentPage === totalPageNumber ? "disabled" : "")
          }
          style={{ cursor: "pointer" }}
        >
          <span
            className="page-link"
            aria-label="Last"
            onClick={() => handlePageClick(totalPageNumber)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Last</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNumber;
