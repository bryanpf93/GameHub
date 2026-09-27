import styled from "styled-components";

export const GameInfoContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  border: 3px solid red;
  padding: 20px;
  gap: 200px;
  margin: 40px;
`;

export const GameInfoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    margin-bottom: 20px;
  }
`;
