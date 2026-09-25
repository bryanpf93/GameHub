import { useQuery } from "@tanstack/react-query";

import { getGames } from "@/api/services/games.service";
import type { Media } from "@/types/Media";

type UseGamesListReturn = {
  gamesData?: Media[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGamesList = (): UseGamesListReturn => {
  const query = useQuery<Media[]>({
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
