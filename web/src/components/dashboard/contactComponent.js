import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "../../ducks/user";
import { MainContainer, SearchBar, ListContainer } from "./styles";

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

function ContactComponent(props) {
  useEffect(() => {
    props.fetchUserList();
  }, []);

  let arrayUsers = props.userList;

  return (
    <>
      <MainContainer>
        <SearchBar>
          <input type="text" />
        </SearchBar>
        {arrayUsers.map((user) => {
          return (
            <ListContainer key={user._id}>
              <img src={user.imageUrl} alt="avatar" />
              <div>
                <h4>{user.name}</h4>
                <p>{user.name}</p>
              </div>
            </ListContainer>
          );
        })}
      </MainContainer>
    </>
  );
}

export default connect(mapStateToProps, {
  fetchUserList,
})(ContactComponent);
