import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";
import { useHistory } from "react-router-dom";
import { Form, ButtonContainer, LoadingContainer } from "./styles";
import Loading from "react-loading";

const mapStateToProps = (state) => {
  return {
    apiToken: state.apiToken,
  };
};

function Userform(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      return null;
    }
    if (password.length === 0) {
      return null;
    }
    setLoading(true);
    props
      .login(username, password)
      .then((token) => {
        if (token) {
          history.push("/dashboard");
        } else {
          setUsername("");
          setPassword("");
        }
        setLoading(false);
      })
      .catch((error) => {
        window.alert(error.message);
        setLoading(false);
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
        {loading ? (
          <LoadingContainer>
            <Loading type="spin" color="green" height={25} width={25} />
          </LoadingContainer>
        ) : null}
        <button type="submit">Login</button>
        <button onClick={() => history.push("/signup")}>
          create a account
        </button>
        <h3 onClick={() => history.push("/resetPassword")}>Forgot password?</h3>
      </ButtonContainer>
    </Form>
  );
}

export default connect(mapStateToProps, {
  login,
})(Userform);
