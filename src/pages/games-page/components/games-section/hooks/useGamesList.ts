import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getGames } from "@/api/services/games.service";
import type { GameItem } from "@/types/GameItem";

type UseGamesListReturn = {
  gamesData?: GameItem[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGamesList = (search: string): UseGamesListReturn => {
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const query = useQuery<GameItem[]>({
    queryKey: ["games", debouncedSearch],
    queryFn: () => getGames(debouncedSearch)
  });
  const { data: gamesData, isLoading, error, refetch } = query;

  return {
    gamesData,
    isLoading,
    error,
    refetch
  };
};
