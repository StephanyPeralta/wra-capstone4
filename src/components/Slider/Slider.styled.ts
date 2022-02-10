import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`;

const SliderTextBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 6px 6px 0;
  color: #fff;
  display: inline-block;
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 11rem;
  text-align: center;
  width: 55%;
  z-index: 999;
  .banner-title {
    font-size: 3rem;
    line-height: 70px;
    margin: 10px 0;
  }
  .banner-description {
    font-size: 1.2rem;
    margin: 0 0 20px;
  }
  @media (max-width: 768px) {
    padding: 15px;
    width: 65%;
    .banner-title {
      line-height: 50px;
      font-size: 2.5rem;
    }
    .banner-description {
      font-size: 1rem;
      margin: 0 0 15px;
    }
  }
  @media (max-width: 576px) {
    top: 8rem;
    padding: 10px;
    width: 80%;
    .banner-title {
      font-size: 2rem;
    }
    .banner-description {
      font-size: 16px;
    }
  }
`;

export { SliderWrapper, SliderTextBox };
