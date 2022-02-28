import React from 'react';

import { PaginationWrapper } from './Pagination.styled';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: any;
}

function Pagination({ productsPerPage, totalProducts, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </PaginationWrapper>
  );
}

export default Pagination;
