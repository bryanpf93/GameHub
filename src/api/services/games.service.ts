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

export const getGames = async (): Promise<GameItem[]> => {
  const response = await api.get<GamesResponse>("/games");

  return response.data.results.map((item) => gameMapper(item));
};
