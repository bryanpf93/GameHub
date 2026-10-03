import { api } from "@/api/axios/axios";
import type { GameItem } from "@/types/GameItem";

import { GameItemResponse, GamesResponse } from "./types/GamesResponse";

const gameMapper = (item: GameItemResponse): GameItem => {
  return {
    id: item.id.toString(),
    title: item.name,
    poster: item.background_image ? item.background_image : ""
  };
};

export const getGames = async (
  page: number,
  search?: string
): Promise<{ games: GameItem[]; next: string | null }> => {
  let params: { page: number; search?: string } = { page };

  if (search) {
    params = { ...params, search };
  }

  const response = await api.get<GamesResponse>("/games", {
    params
  });

  return {
    games: response.data.results.map((item) => gameMapper(item)),
    next: response.data.next
  };
};
