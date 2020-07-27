import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";
import { useHistory } from "react-router-dom";
import { Form, ButtonContainer } from "./styles";

const mapStateToProps = (state) => {
  return {
    apiToken: state.apiToken,
    error: state.error,
  };
};

function Userform(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      return 0;
    }
    if (password.length === 0) {
      return 0;
    }
    props.login(username, password).then((token) => {
      if (token) {
        history.push("/dashboard");
      } else {
        setUsername("");
        setPassword("");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <ButtonContainer>
        <button type="submit">Login</button>
        <h3 onClick={() => history.push("/signup")}>Create a Account</h3>
      </ButtonContainer>
    </Form>
  );
}

export default connect(mapStateToProps, {
  login,
})(Userform);
