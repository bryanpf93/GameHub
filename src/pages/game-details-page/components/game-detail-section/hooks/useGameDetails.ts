import { useQuery } from "@tanstack/react-query";

import { getGameDetails } from "@/api/services/game-detail.service";
import { GameDetail } from "@/types/GameDetail";

type UseGameDetailsReturn = {
  gameData?: GameDetail;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGameDetails = (gameId: string): UseGameDetailsReturn => {
  const query = useQuery<GameDetail>({
    queryKey: ["game", gameId],
    queryFn: () => getGameDetails(gameId)
  });
  const { data: gameData, isLoading, error, refetch } = query;

  return {
    gameData,
    isLoading,
    error,
    refetch
  };
};
