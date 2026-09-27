import { GameDetail } from "@/types/GameDetail";

import { api } from "../axios/axios";
import { GameDetailResponse } from "./types/GameDetailResponse";

const gameDetailMapper = (item: GameDetailResponse): GameDetail => {
  return {
    id: item.id.toString(),
    title: item.name,
    poster: item.background_image ? item.background_image : "",
    rating: item.rating,
    released_date: item.released,
    genres: item.genres.map((genre) => genre.name),
    platforms: item.platforms.map((item) => item.platform.name),
    developers: item.developers.map((developer) => developer.name),
    description: item.description_raw
  };
};

export const getGameDetails = async (gameId: string): Promise<GameDetail> => {
  const response = await api.get<GameDetailResponse>(`/games/${gameId}`);

  return gameDetailMapper(response.data);
};
