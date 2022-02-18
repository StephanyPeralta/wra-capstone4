import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 20px 0;
  .page-item {
    border-bottom: 1px solid #e3e3e3;
    color: #9d9d9d;
    font-size: 16px;
    font-weight: 400;
    padding: 16px 28px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #082022;
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
