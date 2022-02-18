import React from 'react';

import { PaginationWrapper } from './Pagination.styled';

function Pagination() {
  return (
    <PaginationWrapper>
      <div className="page-item">{'<'}</div>
      <div className="page-item">1</div>
      <div className="page-item">2</div>
      <div className="page-item">3</div>
      <div className="page-item">{'>'}</div>
    </PaginationWrapper>
  );
}

export default Pagination;
