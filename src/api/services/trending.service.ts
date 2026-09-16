import { api } from "@/api/axios/axios";
import type { TrendingItemResponse, TrendingResponse } from "@/api/services/types/TrendingReponse";
import { Config } from "@/config/env";
import type { Media } from "@/types/Media";

const trendingMapper = (item: TrendingItemResponse): Media => {
  return {
    id: item.id.toString(),
    first_air_date: item.first_air_date,
    title: item.title,
    poster: item.poster_path ? `${Config.API_IMAGE_BASE_URL}${item.poster_path}` : ""
  };
};

export const getTrending = async (): Promise<Media[]> => {
  const response = await api.get<TrendingResponse>("/trending/all/week");

  return response.data.results.map((item) => trendingMapper(item));
};
