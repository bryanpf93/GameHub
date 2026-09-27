import { useQuery } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";

import { mockGameDetail } from "@/api/services/mocks/game-detail.mock.ts";

import { useGameDetails } from "../useGameDetails";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn()
}));

describe("useGameDetails", () => {
  const mockUseQuery = jest.mocked(useQuery);

  it("should return the game details", async () => {
    mockUseQuery.mockReturnValue({
      data: mockGameDetail,
      isLoading: false,
      error: null
    } as ReturnType<typeof useQuery>);

    const { result } = renderHook(() => useGameDetails("3328"));

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.gameData).toEqual(mockGameDetail);
  });
});
