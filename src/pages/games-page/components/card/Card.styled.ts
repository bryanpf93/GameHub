import styled from "styled-components";

export const CardContainerStyled = styled.div<{ $color: string }>`
  border: 4px solid red;
  background-color: ${({ $color }) => $color};
  width: 33%;
  height: 370px;
`;

export const ImageStyled = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-bottom: 10px;
`;
