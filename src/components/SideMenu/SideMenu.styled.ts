import styled from 'styled-components';

const MenuWrapper = styled.div`
  background-color: #f6f1ed;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: calc(100vh - 80px);
  padding: 40px 0 0;
  transition: transform 0.3s ease-in;
  .sidemenu-title {
    font-size: 1rem;
    letter-spacing: 0.2em;
    margin: 0 0 20px;
    padding: 0 25px;
  }
  .sidemenu-list {
    list-style: none;
  }
  .sidemenu-item {
    display: flex;
    align-items: center;
    border-radius: 0 25px 25px 0;
    color: #082022;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.1em;
    padding: 15px 25px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #faa897;
    }
  }
  .activated {
    border-radius: 0;
    background-color: #faa897;
    color: white;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
  @media (max-width: 576px) {
    padding: 10px 5px;
    width: 100%;
    height: auto;
    .hidden-tablet {
      display: none;
    }
    .sidemenu-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .sidemenu-item {
    border-radius: 6px;
    font-size: 14px;
    padding: 10px 20px;
    margin: 5px;
  }
    .activated {
    border-radius: 6px;
  }
`;

export { MenuWrapper };
