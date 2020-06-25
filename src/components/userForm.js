import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../ducks/auth";
import { useHistory } from "react-router-dom";

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
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "380px",
        height: "250px",
        backgroundColor: "#D6E9BF",
        padding: "25px 45px",
      }}
    >
      <label
        style={{
          marginTop: "10px",
          marginBottom: "8px",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          fontSize: "16px",
        }}
      >
        Username
      </label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        style={{
          padding: "8px 7px",
          borderRadius: "7px",
          borderStyle: "none",
          outline: "none",
          opacity: 0.44,
        }}
      />
      <label
        style={{
          marginBottom: "8px",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          fontSize: "16px",
          marginTop: "15px",
        }}
      >
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={{
          padding: "8px 7px",
          borderRadius: "7px",
          borderStyle: "none",
          outline: "none",
          opacity: 0.44,
        }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            marginTop: "30px",
            textTransform: "uppercase",
            letterSpacing: 3,
            backgroundColor: "#92BF76",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            color: "#FFFFFF",
            borderStyle: "none",
            outline: "none",
            borderRadius: 7,
            padding: "4px 1px",
            fontSize: "16px",
            cursor: "pointer",
            width: "210px",
          }}
        >
          Login
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3
          style={{
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: 2,
            fontSize: "15px",
            marginTop: "22px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/signup")}
        >
          Create a Account
        </h3>
      </div>
    </form>
  );
}

export default connect(mapStateToProps, {
  login,
})(Userform);
