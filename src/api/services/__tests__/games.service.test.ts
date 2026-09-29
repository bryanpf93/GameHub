import type { GameItem } from "@/types/GameItem";

import { getGames } from "../games.service";
import { GamesResponse } from "../types/GamesResponse";

const mockGameItemResponse: GamesResponse = {
  results: [
    {
      id: 1,
      name: "Test Game",
      background_image: "https://example.com/test.jpg"
    }
  ]
};

const mockGameItem: GameItem[] = [
  {
    id: "1",
    title: "Test Game",
    poster: "https://example.com/test.jpg"
  }
];

// mock the api get con jest
jest.mock("@/api/axios/axios", () => ({
  api: {
    get: jest.fn().mockImplementation(() => Promise.resolve({ data: mockGameItemResponse }))
  }
}));

describe("trending.service", () => {
  it("should map trending items", async () => {
    const result = await getGames("test");
    const expected = mockGameItem;

    expect(result).toEqual(expected);
  });
});
