import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #568d62;

  @media (max-width: 1150px) {
    height: auto;
    width: auto;
  }
`;

export const DivHeader = styled.div`
  padding: 8px 12px 0px 12px;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 1150px) {
    flex-direction: column-reverse;
  }
`;
