import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    justify-content: space-evenly;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #ffffff;
    font-family: Open Sans, sans-serif;
    letter-spacing: 3px;
    font-weight: bold;
    border-bottom: 1px solid #fff;
    margin-top: 40px;

    @media (max-width: 1200px) {
      font-size: 22px;
    }

    @media (max-width: 1000px) {
      font-size: 16px;
      margin-top: 25px;
      border-bottom: none;
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    box-shadow: 4px 4px 6px rgb(0, 0, 0, 0.56);

    @media (max-width: 1000px) {
      width: 60px;
      height: 60px;
    }
  }

  p {
    color: #ffffff;
    font-family: Open Sans, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 5px;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }
`;
