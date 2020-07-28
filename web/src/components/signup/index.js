import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewUser } from "../../ducks/user";
import { Form, Div1, TitleDiv, ButtonDiv, InputContainer } from "./styles";

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
      <Form onSubmit={handleSubmit}>
        <Div1>
          <TitleDiv>
            <h2>Signup</h2>
          </TitleDiv>
          <InputContainer>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          <ButtonDiv>
            <button type="submit">Register</button>
            <button onClick={() => history.push("/")}>
              Already have a account? Login
            </button>
          </ButtonDiv>
        </Div1>
      </Form>
    </>
  );
}

export default connect(null, {
  addNewUser,
})(Signup);
