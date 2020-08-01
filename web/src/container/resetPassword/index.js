import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { resetPassword } from "../../ducks/auth";
import Loading from "react-loading";
import { Container, ChangeContainer, LoadingContainer } from "./styles";

function ResetPassword(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewPassword = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      return null;
    }
    if (password.length === 0) {
      return null;
    }
    setLoading(true);
    props
      .resetPassword(username, password)
      .then((response) => {
        if (response) {
          setLoading(false);
          history.push("/");
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <ChangeContainer>
        <div>
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>new password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {loading ? (
            <LoadingContainer>
              <Loading type="spin" color="green" height={25} width={25} />
            </LoadingContainer>
          ) : null}
          <button onClick={(event) => handleNewPassword(event)}>
            set password
          </button>
          <button onClick={() => history.push("/")}>return</button>
        </div>
      </ChangeContainer>
    </Container>
  );
}

export default connect(null, { resetPassword })(ResetPassword);
