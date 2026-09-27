import { useParams } from "react-router-dom";

import Translations from "../../GameDetailsPage.translation.json";
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
        <button onClick={() => refetch}>{Translations.game_details_section.retry}</button>
      </div>
    );
  }

  return <div>{gameData?.title}</div>;
};
