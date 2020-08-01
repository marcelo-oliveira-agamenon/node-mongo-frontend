import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #568d62;
`;

export const DivHeader = styled.div`
  padding: 8px 12px 0px 12px;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 700px) {
    margin-top: 0px;
    flex-direction: column-reverse;
  }
`;
