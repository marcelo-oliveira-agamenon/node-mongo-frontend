import styled from "styled-components";

export const Form = styled.div`
  width: 550px;
  height: 700px;
  background-color: #dbebf3;
  box-shadow: 2px 2px 5px #dbebf3, -2px -2px 5px #dbebf3;
  border-radius: 5px;
`;

export const Div1 = styled.div`
  padding: 40px 100px 0px 100px;
`;

export const TitleDiv = styled.div`
  margin-bottom: 80px;

  h2 {
    margin: 0;
    font-family: Open Sans, sans-serif;
    font-size: 31px;
    color: #005281;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: lighter;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-family: Open Sans, sans-serif;
    color: #005281;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 8px;
    margin-left: 8px;
  }

  input {
    border-radius: 15px;
    outline: none;
    border-style: none;
    padding: 5px 12px;
    box-shadow: 1px 1px 4px #ffffff, -1px -1px 4px #ffffff;

    :focus {
      border-style: solid;
      border-color: #b4b4b4;
      border-width: 1.3px;
      box-shadow: 1px 1px 6px #b4b4b4, -1px -1px 6px #b4b4b4;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #ffffff;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #005281;
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 9px 0px;
    border-radius: 3px;
    border-width: 1px;
    margin-top: 70px;

    :hover {
      background-color: #81c8f1;
      border: none;
      color: #000;
      box-shadow: 1px 1px 6px #81c8f1, -1px -1px 6px #81c8f1;
    }
  }

  button:nth-child(2) {
    background-color: #e7eaec;
    color: #000;
    font-size: 14px;
    border-width: 1px;
    border-radius: 3px;
    border-color: #000;
    font-family: Open Sans, sans-serif;
    font-weight: lighter;
    cursor: pointer;
    padding: 8px 0px;
    border-style: solid;
    letter-spacing: 5px;
    margin-top: 0px;

    :hover {
      border: none;
      background-color: #c6c6c6;
      box-shadow: 1px 1px 6px #c6c6c6, -1px -1px 6px #c6c6c6;
    }
  }
`;
