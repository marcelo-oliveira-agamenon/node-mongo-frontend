import React from "react";
import { connect } from "react-redux";
import ContactComp from "../../components/dashboard/contactComponent";
import Header from "../../components/header/index";
import { MainContainer, DivHeader, DivBody } from "./styles";

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser,
  };
};

function Dashboard(props) {
  return (
    <>
      <MainContainer>
        <DivHeader>
          <Header loggedUser={props.loggedUser} />
        </DivHeader>
        <DivBody>
          <ContactComp />
        </DivBody>
      </MainContainer>
    </>
  );
}

export default connect(mapStateToProps, null)(Dashboard);
