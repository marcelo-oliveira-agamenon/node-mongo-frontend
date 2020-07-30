import React from "react";
import { MainContainer } from "./styles";

function Header(props) {
  return (
    <>
      <MainContainer>
        <h1>CHAT - WELCOME TO YOUR DASHBOARD</h1>
        <img src={props.loggedUser.imageUrl} alt="avatar" />
      </MainContainer>
    </>
  );
}

export default Header;
