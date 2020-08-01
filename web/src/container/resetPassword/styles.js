import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: rgb(107, 168, 203, 0.29);
`;

export const ChangeContainer = styled.div`
  align-self: center;
  background-color: rgb(214, 233, 191, 0.59);
  border: 1.2px solid #568d62;
  width: 100%;
  max-width: 500px;
  height: 350px;

  @media (max-width: 350px) {
    height: 400px;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    padding: 40px 55px 10px 55px;
  }

  label {
    font-family: Open Sans, sans-serif;
    margin-bottom: 12px;
    font-weight: normal;
    font-size: 16px;
    margin-left: 18px;
    text-transform: uppercase;
  }

  input {
    margin-bottom: 25px;
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

  button {
    align-self: center;
    margin-bottom: 25px;
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
`;

export const LoadingContainer = styled.div`
  align-self: center;
  margin-top: -45px;
`;
