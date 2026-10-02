import { api } from "@/api/axios/axios";
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

describe("games.service", () => {
  it("should map game items", async () => {
    const result = await getGames("test", 1);
    const expected = mockGameItem;

    expect(result).toEqual(expected);
  });

  it("should use an empty poster when there is no background image", async () => {
    jest.mocked(api.get).mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            name: "Test Game",
            background_image: undefined
          }
        ]
      }
    });

    const result = await getGames("test", 1);

    expect(result[0].poster).toBe("");
  });

  it("should send search and page params", async () => {
    await getGames("test", 3);

    expect(api.get).toHaveBeenCalledWith("/games", {
      params: {
        search: "test",
        page: 3
      }
    });
  });
});
