import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

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
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    box-shadow: 4px 4px 6px rgb(0, 0, 0, 0.56);
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
