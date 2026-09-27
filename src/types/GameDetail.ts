import { GameItem } from "./GameItem";

export interface GameDetail extends GameItem {
  rating: number;
  released_date: string;
  genres: string[];
  platforms: string[];
  developers: string[];
  description: string;
}
