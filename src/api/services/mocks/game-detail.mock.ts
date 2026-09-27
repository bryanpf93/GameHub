import { GameDetailResponse } from "@/api/services/types/GameDetailResponse.ts";
import { GameDetail } from "@/types/GameDetail.ts";

export const mockDetailResponse: GameDetailResponse = {
  id: 3328,
  name: "The Witcher 3: Wild Hunt",
  released: "2015-05-18",
  background_image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  rating: 4.64,
  platforms: [
    {
      platform: { id: 4, name: "PC" }
    },
    {
      platform: { id: 1, name: "Xbox One" }
    }
  ],
  developers: [{ id: 9023, name: "CD PROJEKT RED" }],
  genres: [{ id: 4, name: "Action" }],
  description_raw: "The third game in a series"
};

export const mockGameDetail: GameDetail = {
  id: "3328",
  title: "The Witcher 3: Wild Hunt",
  released_date: "2015-05-18",
  poster: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  rating: 4.64,
  platforms: ["PC", "Xbox One"],
  developers: ["CD PROJEKT RED"],
  genres: ["Action"],
  description: "The third game in a series"
};
