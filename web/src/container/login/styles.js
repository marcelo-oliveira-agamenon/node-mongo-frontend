import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f7f7f7;
  height: 100%;
  display: inline-flex;
`;

export const ImageContainer = styled.div`
  background-color: #6ba8cb;
  display: flex;
  width: 100%;

  img {
    width: 400px;
    height: 390px;
    margin-left: 200px;
  }

  div {
    align-self: center;
  }
`;

export const LoginComponent = styled.div`
  display: flex;
  padding: 0px 80px;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;

  h1 {
    font-family: Notable;
    color: #568d62;
    letter-spacing: 3px;
    font-size: 25px;
    text-align: center;
    width: 80%;
  }
`;

export const Container = styled.div`
  align-self: center;
  margin-top: 38px;
`;
