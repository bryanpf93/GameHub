import styled from "styled-components";

export const CardContainerStyled = styled.div<{ $color: string }>`
  display: flex;
  border: 2px solid red;
  max-width: 300px;
  background-color: ${({ $color }) => $color};
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`;
