import { GameDescriptionContainerStyled } from "./GameDescription.styled";

type GameDescriptionProps = {
  description: string;
};

export const GameDescrition = ({ description }: GameDescriptionProps) => {
  return (
    <GameDescriptionContainerStyled>
      <h3>Descripción</h3>
      <p>{description}</p>
    </GameDescriptionContainerStyled>
  );
};
