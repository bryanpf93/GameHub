import { useState } from "react";

import { CardContainerStyled, ImageStyled } from "./Card.styled";

type CardProps = {
  title: string;
  poster: string;
  date: string;
  onClick?: () => void;
  onFavorite?: (favorite: boolean) => void;
};

export const Card = ({ title, poster, date, onClick, onFavorite }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardContainerStyled $color="yellow">
      <h2>{title}</h2>
      <ImageStyled src={poster} alt={title} />
      <p>{date}</p>
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
