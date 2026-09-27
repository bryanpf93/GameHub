import styled from "styled-components";

export const GameHeaderContainerStyled = styled.div<{ $color: string }>`
  display: flex;
  background-color: ${({ $color }) => $color};
  border: 3px solid red;
  width: 80%;
  margin-top: 40px;
  padding: 20px;
`;

export const GameHeaderPosterStyled = styled.img`
  width: 60%;
  height: 500px;
  object-fit: contain;
`;

export const GameHeaderInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 20px;
  }
`;
