import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background-color: #374fa4;
  max-height: 550px;
  height: 100%;
  padding: 15px 15px;

  @media (max-width: 1150px) {
    align-self: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const ListMainContainer = styled.div`
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 5px;
  margin-bottom: 20px;

  input {
    margin-left: 10px;
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    background-color: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardContact = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
  padding: 8px 0px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    animation-name: toLeft;
    animation-duration: 0.2s;
  }

  @keyframes toLeft {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: 10px;
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-left: 10px;
  }

  h4 {
    font-family: Open Sans, sans-serif;
    font-size: 15px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    color: #8a8a8a;
    font-family: Open Sans, sans-serif;
    font-size: 12px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
  }
`;

export const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 660px;
  height: 550px;
  background-color: #374fa4;
  padding: 15px 25px;

  @media (max-width: 1150px) {
    justify-content: center;
    align-self: center;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const ChatBox = styled.div`
  display: flex;
  height: 100%;
  max-height: 600px;
  background-color: #e5ebff;
  padding: 15px 15px;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const MessageBar = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  padding: 9px 0px;
  margin-top: 5px;

  input {
    margin-left: 5px;
    margin-right: 10px;
    padding: 10px 9px;
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    background-color: none;
    border: none;
    border-radius: 12px;
    outline: none;
    width: 100%;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    width: 38px;
    height: 38px;
    cursor: pointer;
  }
`;

export const MsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 15px;
  width: 140px;
  padding: 12px 9px;
  border-radius: 10px;

  h2 {
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 500;
    align-self: center;
  }

  p {
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    color: #909090;
    align-self: center;
  }
`;
