import { Config } from "@/config/env";
import type { Media } from "@/types/Media";

import { getTrending } from "../trending.service";
import type { TrendingResponse } from "../types/TrendingReponse";

const mockTrendingItemResponse: TrendingResponse = {
  results: [
    {
      id: 1,
      title: "Test Movie",
      poster_path: "/test.jpg",
      first_air_date: "2023-01-01"
    }
  ]
};

const mockMedia: Media[] = [
  {
    id: "1",
    title: "Test Movie",
    poster: `${Config.API_IMAGE_BASE_URL}/test.jpg`,
    first_air_date: "2023-01-01"
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
