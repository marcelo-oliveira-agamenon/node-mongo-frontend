import React from "react";
import LoginForm from "../../components/login/index";
import IconImg from "../../assets/corpse.png";
import {
  MainContainer,
  ImageContainer,
  LoginComponent,
  TitleContainer,
  Container,
} from "./styles";

function Login() {
  return (
    <>
      <MainContainer>
        <ImageContainer>
          <div>
            <img src={IconImg} alt="Login" />
          </div>
        </ImageContainer>
        <LoginComponent>
          <TitleContainer>
            <h1>Welcome to the Real World of Leave a Message</h1>
          </TitleContainer>
          <Container>
            <LoginForm />
          </Container>
        </LoginComponent>
      </MainContainer>
    </>
  );
}

export default Login;
