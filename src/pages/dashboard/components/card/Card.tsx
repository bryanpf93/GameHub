import { useState } from "react";

import { CardContainerStyled, ImageStyled } from "./Card.styled";

type CardProps = {
  title: string;
  poster: string;
  onClick?: () => void;
  onFavorite?: (favorite: boolean) => void;
};

export const Card = ({ title, poster, onClick, onFavorite }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardContainerStyled $color="#16171D">
      <h2>{title}</h2>
      <ImageStyled src={poster} alt={title} />
      <button onClick={onClick}>Watch</button>
      <button
        onClick={() => {
          const newFavorite = !isFavorite;
          setIsFavorite(newFavorite);
          onFavorite?.(newFavorite);
        }}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </CardContainerStyled>
  );
};
