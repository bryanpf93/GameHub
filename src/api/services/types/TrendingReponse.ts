export type GameItemResponse = {
  id: number;
  name: string;
  background_image: string;
};

export type GamesResponse = {
  results: GameItemResponse[];
};
