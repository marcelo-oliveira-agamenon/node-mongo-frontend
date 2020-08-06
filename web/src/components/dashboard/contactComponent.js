import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { fetchUserList, selectionUser } from "../../ducks/user";
import Loading from "react-loading";
import {
  MainContainer,
  SearchBar,
  ListContainer,
  CardContact,
  ListMainContainer,
} from "./styles";

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

function ContactComponent(props) {
  const [search, setSearch] = useState("");
  const [arrayUsers, setArrayUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.fetchUserList().then((response) => {
      if (response) {
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setArrayUsers(props.userList);
  }, [props.userList]);

  const handleSearchBar = (string) => {
    setSearch(string);
    let aux = arrayUsers.filter((user) => {
      if (user.name.includes(string)) {
        return user;
      }
      return null;
    });
    if (aux.length > 0) {
      setArrayUsers(aux);
    }
    if (string.length === 0) {
      setArrayUsers(props.userList);
    }
  };

  const handleClick = (user) => {
    props.selectionUser(user);
  };

  return (
    <>
      <MainContainer>
        <SearchBar>
          <SearchOutlined />
          <input
            type="text"
            value={search}
            placeholder="Search contact"
            onChange={(event) => handleSearchBar(event.target.value)}
          />
        </SearchBar>
        <ListMainContainer>
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loading type="spin" color="white" height={25} width={25} />
            </div>
          ) : (
            arrayUsers.map((user) => {
              return (
                <ListContainer key={user._id} onClick={() => handleClick(user)}>
                  <CardContact>
                    <img src={user.imageUrl} alt="avatar" />
                    <div>
                      <h4>{user.name}</h4>
                      <p>{user.name}</p>
                    </div>
                  </CardContact>
                </ListContainer>
              );
            })
          )}
        </ListMainContainer>
      </MainContainer>
    </>
  );
}

export default connect(mapStateToProps, {
  fetchUserList,
  selectionUser,
})(ContactComponent);
