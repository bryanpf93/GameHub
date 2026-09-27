import { useQuery } from "@tanstack/react-query";

import { getGames } from "@/api/services/games.service";
import type { GameItem } from "@/types/GameItem";

type UseGamesListReturn = {
  gamesData?: GameItem[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGamesList = (): UseGamesListReturn => {
  const query = useQuery<GameItem[]>({
    queryKey: ["games"],
    queryFn: getGames
  });
  const { data: gamesData, isLoading, error, refetch } = query;

  return {
    gamesData,
    isLoading,
    error,
    refetch
  };
};
