import styled from 'styled-components';

const PaginationWrapper = styled.div`
  margin: 0 0 60px;
  padding: 20px 0;
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    border-bottom: 1px solid #e3e3e3;
    padding: 10px;
  }
  .page-link {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: #9d9d9d;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    padding: 7px;
    height: 40px;
    width: 40px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #082022;
      background-color: #faa897;
    }
  }
  @media (max-width: 479px) {
    .page-item {
      font-size: 14px;
      font-weight: 400;
      padding: 10px 25px;
    }
  }
`;

export { PaginationWrapper };
