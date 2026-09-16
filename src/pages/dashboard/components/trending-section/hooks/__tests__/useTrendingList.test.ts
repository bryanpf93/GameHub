import { renderHook } from "@testing-library/react";

import { useTrendingList } from "../useTrendingList";

// mock getTrending
jest.mock("@/api/services/trending.service", () => ({
  getTrending: jest.fn()
}));

describe("useTrendingList", () => {
  it("should return trending data", () => {
    const { result } = renderHook(() => useTrendingList());

    expect(result.current.trendingData).toBeDefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});
