import { GameInfoContainerStyled, GameInfoItemStyled } from "./GameInfo.styled";

type GameInfoProps = {
  genres: string[];
  platforms: string[];
  developers: string[];
};

export const GameInfo = ({ genres, platforms, developers }: GameInfoProps) => {
  return (
    <GameInfoContainerStyled>
      <GameInfoItemStyled>
        <h3>Géneros</h3>
        {genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </GameInfoItemStyled>
      <GameInfoItemStyled>
        <h3>Plataformas</h3>
        {platforms.map((platform) => (
          <span key={platform}>{platform}</span>
        ))}
      </GameInfoItemStyled>

      <GameInfoItemStyled>
        <h3>Desarrolladores</h3>
        {developers.map((developer) => (
          <span key={developer}>{developer}</span>
        ))}
      </GameInfoItemStyled>
    </GameInfoContainerStyled>
  );
};
