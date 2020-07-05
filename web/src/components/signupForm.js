import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewUser } from "../ducks/user";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      password.length === 0
    ) {
      return 0;
    }
    props.addNewUser(name, email, password, phone).then((response) => {
      if (response === "User created!") {
        history.push("/");
      } else {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
      }
    });
  };

  return (
    <>
      <form
        style={{
          width: "550px",
          height: "700px",
          backgroundColor: "#DBEBF3",
          boxShadow: "2px 2px 5px #DBEBF3, -2px -2px 5px #DBEBF3",
          borderRadius: 5,
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ padding: "40px 100px 0px 100px" }}>
          <div style={{ marginBottom: "80px" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "Open Sans, sans-serif",
                fontSize: "31px",
                color: "#005281",
                textTransform: "uppercase",
                letterSpacing: 2,
                fontWeight: "lighter",
              }}
            >
              Signup
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                color: "#005281",
                letterSpacing: 1,
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "8px",
                marginLeft: "8px",
              }}
            >
              Name
            </label>
            <input
              type="text"
              style={{
                borderRadius: 15,
                outline: "none",
                borderStyle: "none",
                padding: "5px 12px",
                boxShadow: "1px 1px 4px #FFFFFF, -1px -1px 4px #FFFFFF",
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                color: "#005281",
                letterSpacing: 1,
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "8px",
                marginLeft: "8px",
              }}
            >
              Email
            </label>
            <input
              type="text"
              style={{
                borderRadius: 15,
                outline: "none",
                borderStyle: "none",
                padding: "5px 12px",
                boxShadow: "1px 1px 4px #FFFFFF, -1px -1px 4px #FFFFFF",
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                color: "#005281",
                letterSpacing: 1,
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "8px",
                marginLeft: "8px",
              }}
            >
              Phone
            </label>
            <input
              type="text"
              style={{
                borderRadius: 15,
                outline: "none",
                borderStyle: "none",
                padding: "5px 12px",
                boxShadow: "1px 1px 4px #FFFFFF, -1px -1px 4px #FFFFFF",
              }}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "70px",
            }}
          >
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                color: "#005281",
                letterSpacing: 1,
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "8px",
                marginLeft: "8px",
              }}
            >
              Password
            </label>
            <input
              type="text"
              style={{
                borderRadius: 15,
                outline: "none",
                borderStyle: "none",
                padding: "5px 12px",
                boxShadow: "1px 1px 4px #FFFFFF, -1px -1px 4px #FFFFFF",
              }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              type="submit"
              style={{
                color: "#FFFFFF",
                letterSpacing: 3,
                textTransform: "uppercase",
                backgroundColor: "#005281",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "20px",
                padding: "9px 0px",
                borderRadius: "3px",
                borderWidth: "1px",
              }}
            >
              Register
            </button>
            <button
              style={{
                backgroundColor: "#E7EAEC",
                borderWidth: "1px",
                borderRadius: "3px",
                borderColor: "#000",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "lighter",
                cursor: "pointer",
                padding: "8px 0px",
                borderStyle: "solid",
              }}
              onClick={() => history.push("/")}
            >
              Already have a account? Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default connect(null, {
  addNewUser,
})(Signup);
