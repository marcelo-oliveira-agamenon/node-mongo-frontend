import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewUser } from "../../ducks/user";
import { Form, Div1, TitleDiv, ButtonDiv, InputContainer } from "./styles";
import Avatar from "../../assets/avatar.png";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState();
  const [avatar, setAvatar] = useState("");
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

  const handleFileImage = (event) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setAvatar(image);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Div1>
          <TitleDiv>
            <h2>Signup</h2>
            <img
              src={avatar === "" ? Avatar : avatar}
              alt="avatar"
              onClick={() => document.getElementById("inputFile")?.click()}
            />
            <input
              id="inputFile"
              type="file"
              accept="image/jpg/png/jpeg"
              onChange={(event) => handleFileImage(event)}
            />
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
            <label>system permissions</label>
            <select
              value={roles}
              onChange={(event) => setRoles(event.target.value)}
            >
              <option value=""></option>
              <option value="user">Usuário</option>
              <option value="admin">Admin</option>
            </select>
          </InputContainer>
          <InputContainer>
            <label>password</label>
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
