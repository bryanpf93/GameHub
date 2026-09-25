import { api } from "@/api/axios/axios";
import type { Media } from "@/types/Media";

import { GameItemResponse, GamesResponse } from "./types/GamesResponse";

const gameMapper = (item: GameItemResponse): Media => {
  return {
    id: item.id.toString(),
    title: item.name,
    poster: item.background_image ? item.background_image : ""
  };
};

export const getGames = async (): Promise<Media[]> => {
  const response = await api.get<GamesResponse>("/games");

  return response.data.results.map((item) => gameMapper(item));
};
