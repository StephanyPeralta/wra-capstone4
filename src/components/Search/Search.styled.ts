import styled from 'styled-components';

const SearchContainer = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  max-width: 250px;
  padding: 0.1rem;
  position: relative;
  @media (max-width: 576px) {
    margin: 0 10px;
  }
`;

const SearchInput = styled.input`
  color: #082022;
  border-radius: 6px;
  height: 40px;
  width: 100%;
  padding: 0.4rem 2.3rem 0.4rem 0.8rem;
  background-color: #ececec;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: #dfdfdf;
  }
  &:focus {
    outline: none;
  }
  @media (max-height: 440px) {
    height: 23px;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082022;
  padding: 0 0.6rem;
  &:focus {
    border: none;
  }
`;

export { SearchContainer, SearchInput, SearchIconWrapper };
