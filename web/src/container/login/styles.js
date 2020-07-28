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
  max-width: 1000px;

  @media (max-width: 860px) {
    display: none;
  }

  img {
    max-width: 400px;
    width: 100%;
    max-height: 390px;
    height: 100%;
    margin-left: 200px;

    @media (max-width: 1300px) {
      margin-left: 50px;
    }

    @media (max-width: 1150px) {
      margin-left: 0px;
    }
  }

  div {
    align-self: center;
  }
`;

export const LoginComponent = styled.div`
  display: flex;
  padding: 0px 80px;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 0 0;
  }
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
