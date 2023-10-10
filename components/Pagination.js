import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const MAX_PAGES = 5; // Maximum number of pages to show in pagination
  const pageNumbers = [];

  // Calculate the starting and ending page numbers based on current page and maximum pages to show
  let startPage = 1;
  let endPage = totalPages;
  if (totalPages > MAX_PAGES) {
    const middlePage = Math.floor(MAX_PAGES / 2);
    if (currentPage <= middlePage) {
      endPage = MAX_PAGES;
    } else if (currentPage >= totalPages - middlePage) {
      startPage = totalPages - MAX_PAGES + 1;
    } else {
      startPage = currentPage - middlePage;
      endPage = currentPage + middlePage;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <a
              href="#!"
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a
              href="#!"
              className="page-link"
              onClick={() => handlePageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <a
              href="#!"
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
