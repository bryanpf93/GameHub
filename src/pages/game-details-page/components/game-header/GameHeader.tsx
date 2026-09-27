import {
  GameHeaderContainerStyled,
  GameHeaderInfoStyled,
  GameHeaderPosterStyled
} from "./GameHeader.styled";

type GameHeaderProps = {
  title: string;
  poster: string;
  rating: number;
  released_date: string;
};

export const GameHeader = ({ title, poster, rating, released_date }: GameHeaderProps) => {
  return (
    <GameHeaderContainerStyled $color="#121318">
      <GameHeaderPosterStyled src={poster} alt={title} />
      <GameHeaderInfoStyled>
        <h1>{title}</h1>
        <h3>Rating: {rating}</h3>
        <h3>Fecha de Lanzamiento: {released_date}</h3>
      </GameHeaderInfoStyled>
    </GameHeaderContainerStyled>
  );
};
