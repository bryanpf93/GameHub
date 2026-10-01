import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Translations from "../../GamesPage.translation.json";
import { Card } from "../card/Card";
import { Search } from "../search/Search";
import { CardsContainer, GamesContainer } from "./GamesSection.styled";
import { useGamesList } from "./hooks/useGamesList";

export const GamesSection = () => {
  const [search, setSearch] = useState("");
  const { gamesData, isLoading, error, refetch } = useGamesList(search);
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        {Translations.games_section.error}
        <button onClick={() => refetch()}>{Translations.games_section.retry}</button>
      </div>
    );
  }

  const handleCardClick = (gameId: string) => {
    navigate(`/games/${gameId}`);
  };

  const handleCardFavorite = () => {
    // handle favorite
    // api {favorite: true/false}
    //console.log("Card favorite:");
  };

  return (
    <GamesContainer>
      <h2>{Translations.games_section.title}</h2>

      <Search onSearch={setSearch} search={search} />

      {isLoading ? (
        <div>{Translations.games_section.loading}</div>
      ) : (
        <CardsContainer>
          {gamesData?.map((gameItem) => (
            <Card
              onClick={() => handleCardClick(gameItem.id)}
              onFavorite={handleCardFavorite}
              key={gameItem.id}
              title={gameItem.title}
              poster={gameItem.poster}
            />
          ))}
        </CardsContainer>
      )}
    </GamesContainer>
  );
};
