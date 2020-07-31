import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background-color: #374fa4;
  max-height: 500px;
  height: 100%;
  padding: 15px 15px;
`;

export const SearchBar = styled.div`
  border-radius: 8px;
  background-color: #fff;
  padding: 5px 5px;
  margin-bottom: 20px;

  input {
    background-color: none;
    border: none;
    outline: none;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 100%;
  height: 70px;
  padding: 10px 0px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }

  h4 {
    font-family: Open Sans, sans-serif;
    font-size: 15px;
    font-weight: 600;
  }

  p {
    margin-top: 10px;
    color: #8a8a8a;
    font-family: Open Sans, sans-serif;
    font-weight: lighter;
    font-size: 12px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;
  }
`;
