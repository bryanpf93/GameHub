import Translations from "../../GamesPage.translation.json";
import { Card } from "../card/Card";
import { CardsContainer, GamesContainer } from "./GamesSection.styled";
import { useGamesList } from "./hooks/useGamesList";

export const GamesSection = () => {
  const { gamesData, isLoading, error, refetch } = useGamesList();

  if (isLoading) {
    return <div>{Translations.games_section.loading}</div>;
  }

  if (error) {
    return (
      <div>
        {Translations.games_section.error}
        <button onClick={() => refetch()}>{Translations.games_section.retry}</button>
      </div>
    );
  }

  const handleCardClick = () => {
    // navegar a detalle
    //console.log("Card clicked:");
  };

  const handleCardFavorite = () => {
    // handle favorite
    // api {favorite: true/false}
    //console.log("Card favorite:");
  };

  return (
    <GamesContainer>
      <h2>{Translations.games_section.title}</h2>

      <CardsContainer>
        {gamesData?.map((media) => (
          <Card
            onClick={handleCardClick}
            onFavorite={handleCardFavorite}
            key={media.id}
            title={media.title}
            poster={media.poster}
          />
        ))}
      </CardsContainer>
    </GamesContainer>
  );
};
