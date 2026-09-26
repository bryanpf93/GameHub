import { GameItemResponse } from "./GamesResponse";

export type GameDetailResponse = GameItemResponse & {
  rating: number;
  released: string;
  genres: {
    id: number;
    name: string;
  }[];
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
  developers: {
    id: number;
    name: string;
  }[];
  description_raw: string;
};
