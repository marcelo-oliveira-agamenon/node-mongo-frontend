import React from "react";
import { MainContainer, SignUpContainer } from "./styles";
import SignupForm from "../../components/signup/index";

function SignUp() {
  return (
    <>
      <MainContainer>
        <SignUpContainer>
          <SignupForm />
        </SignUpContainer>
      </MainContainer>
    </>
  );
}

export default SignUp;
