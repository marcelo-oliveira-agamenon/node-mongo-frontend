import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 320px;
  background-color: #d6e9bf;
  padding: 25px 45px;

  @media (max-width: 600px) {
    width: 310px;
  }

  label {
    margin-top: 10px;
    margin-bottom: 8px;
    font-family: Open Sans, sans-serif;
    font-weight: normal;
    font-size: 16px;
    margin-left: 18px;
    text-transform: uppercase;
  }

  input {
    padding: 8px 7px;
    border-radius: 7px;
    border-style: none;
    outline: none;
    opacity: 0.44;

    :focus {
      border-style: solid;
      border-color: green;
      border-width: 1.5px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;

  button {
    margin-top: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #92bf76;
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    color: #ffffff;
    border-style: none;
    outline: none;
    border-radius: 7px;
    padding: 4px 0px;
    font-size: 16px;
    cursor: pointer;
    width: 210px;

    :hover {
      background-color: #667d57;
    }
  }

  button:nth-child(2) {
    margin-top: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #dbebf3;
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    color: #000;
    border-style: none;
    outline: none;
    border-radius: 7px;
    padding: 4px 1px;
    font-size: 14px;
    cursor: pointer;
    width: 210px;

    :hover {
      background-color: #667d57;
      color: #ffffff;
    }
  }

  h3 {
    font-family: Open Sans, sans-serif;
    letter-spacing: 2px;
    font-size: 15px;
    margin-top: 35px;
    cursor: pointer;
    text-align: center;

    :hover {
      font-size: 16px;
    }
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 5px;
  align-self: center;
  margin-bottom: -6px;
`;
