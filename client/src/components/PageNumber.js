import React from "react";

const PageNumber = ({ total, size, currentPage }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / size); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = num => {
    console.log(num);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class={"page-item " + (currentPage === 1 ? "disabled" : "")}>
          <span
            class="page-link"
            aria-label="Previous"
            onClick={handlePageClick(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </span>
        </li>
        {pageNumbers.map(num => (
          <li
            key={num}
            class={"page-item " + (currentPage === num ? "active" : "")}
          >
            <span class="page-link" onClick={handlePageClick(currentPage)}>
              {num}
            </span>
          </li>
        ))}
        <li
          class={
            "page-item " +
            (currentPage === pageNumbers.length ? "disabled" : "")
          }
        >
          <span
            class="page-link"
            aria-label="Next"
            onClick={handlePageClick(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNumber;
