import { useParams } from "react-router-dom";

import Translations from "../../GameDetailsPage.translation.json";
import { GameDescrition } from "../game-description/GameDescription";
import { GameHeader } from "../game-header/GameHeader";
import { GameInfo } from "../game-info/GameInfo";
import { GameDetailsContainer } from "./GameDetailSection.styled";
import { useGameDetails } from "./hooks/useGameDetails";

export const GameDetailsSection = () => {
  const { gameId } = useParams();

  const { gameData, isLoading, error, refetch } = useGameDetails(gameId!);

  if (isLoading) {
    return <div>{Translations.game_details_section.loading}</div>;
  }

  if (error) {
    return (
      <div>
        {Translations.game_details_section.error}
        <button onClick={() => refetch()}>{Translations.game_details_section.retry}</button>
      </div>
    );
  }

  if (!gameData) {
    return null;
  }

  return (
    <GameDetailsContainer>
      <GameHeader
        title={gameData.title}
        poster={gameData.poster}
        rating={gameData.rating}
        released_date={gameData.released_date}
      />

      <GameInfo
        genres={gameData.genres}
        platforms={gameData.platforms}
        developers={gameData.developers}
      />

      <GameDescrition description={gameData.description} />
    </GameDetailsContainer>
  );
};
