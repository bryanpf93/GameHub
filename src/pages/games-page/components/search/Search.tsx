import React from "react";

import { SearchContainerStyled, SearchInputStyled } from "./Search.styled";

interface SearchProps {
  search: string;
  onSearch: (search: string) => void;
}

export const Search = ({ search, onSearch }: SearchProps) => {
  return (
    <SearchContainerStyled>
      <SearchInputStyled
        type="text"
        value={search}
        placeholder="Buscar juego..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </SearchContainerStyled>
  );
};
