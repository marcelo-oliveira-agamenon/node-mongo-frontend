import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { MainContainer } from "./styles";
import { logout } from "../../ducks/auth";

function Header(props) {
  const history = useHistory();
  const handleLogout = () => {
    props.logout().then((response) => {
      if (response) {
        history.push("/");
      }
    });
  };

  return (
    <>
      <MainContainer>
        <h1>WELCOME TO YOUR DASHBOARD, {props.loggedUser.name}</h1>
        <div>
          <img src={props.loggedUser.imageUrl} alt="avatar" />
          <p onClick={handleLogout}>sair</p>
        </div>
      </MainContainer>
    </>
  );
}

export default connect(null, { logout })(Header);
