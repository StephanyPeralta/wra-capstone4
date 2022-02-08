import styled from 'styled-components';

const CategoryWrapper = styled.div`
  display: inline-block;
  max-width: 450px;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media (max-width: 380px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 10px;
  background-color: white;
  color: #436761;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #faa897;
    transform: scale(1.1);
  }
`;

export { CategoryWrapper, Image, Info, Title, Button };
