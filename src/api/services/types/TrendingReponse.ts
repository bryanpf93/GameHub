export type TrendingItemResponse = {
  id: number;
  title: string;
  first_air_date: string;
  poster_path: string;
};

export type TrendingResponse = {
  results: TrendingItemResponse[];
};
