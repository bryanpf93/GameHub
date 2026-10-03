import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getGames } from "@/api/services/games.service";
import type { GameItem } from "@/types/GameItem";

type GamesData = {
  games: GameItem[];
  next: string | null;
};

type UseGamesListReturn = {
  gamesData?: GamesData;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGamesList = (search: string, page: number): UseGamesListReturn => {
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const query = useQuery<GamesData>({
    queryKey: ["games", debouncedSearch, page],
    queryFn: () => getGames(debouncedSearch, page)
  });
  const { data: gamesData, isLoading, error, refetch } = query;

  return {
    gamesData,
    isLoading,
    error,
    refetch
  };
};
