import type { Media } from "@/types/Media";

import { getTrending } from "../trending.service";
import type { GamesResponse } from "../types/TrendingReponse";

const mockTrendingItemResponse: GamesResponse = {
  results: [
    {
      id: 1,
      name: "Test Game",
      background_image: "https://example.com/test.jpg"
    }
  ]
};

const mockMedia: Media[] = [
  {
    id: "1",
    title: "Test Game",
    poster: "https://example.com/test.jpg"
  }
];

// mock the api get con jest
jest.mock("@/api/axios/axios", () => ({
  api: {
    get: jest.fn().mockImplementation(() => Promise.resolve({ data: mockTrendingItemResponse }))
  }
}));

describe("trending.service", () => {
  it("should map trending items", async () => {
    const result = await getTrending();
    const expected = mockMedia;

    expect(result).toEqual(expected);
  });
});
