import { useQuery } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";

import { getGameDetails } from "@/api/services/game-detail.service";
import { mockGameDetail } from "@/api/services/mocks/game-detail.mock.ts";

import { useGameDetails } from "../useGameDetails";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn()
}));

jest.mock("@/api/services/game-detail.service", () => ({
  getGameDetails: jest.fn()
}));

describe("useGameDetails", () => {
  const mockUseQuery = jest.mocked(useQuery);
  const mockGetGameDetails = jest.mocked(getGameDetails);

  it("should return the game details", () => {
    const mockRefetch = jest.fn();

    mockUseQuery.mockReturnValue({
      data: mockGameDetail,
      isLoading: false,
      error: null,
      refetch: mockRefetch
    } as unknown as ReturnType<typeof useQuery>);

    const { result } = renderHook(() => useGameDetails("3328"));

    expect(result.current).toEqual({
      gameData: mockGameDetail,
      isLoading: false,
      error: null,
      refetch: mockRefetch
    });
  });

  it("should call getGameDetails with the game id", async () => {
    mockGetGameDetails.mockResolvedValue(mockGameDetail);

    mockUseQuery.mockReturnValue({
      data: mockGameDetail,
      isLoading: false,
      error: null,
      refetch: jest.fn()
    } as unknown as ReturnType<typeof useQuery>);

    renderHook(() => useGameDetails("3328"));

    const queryOptions = mockUseQuery.mock.calls[0][0];

    const queryFn = queryOptions.queryFn as () => Promise<unknown>;

    await queryFn();

    expect(mockGetGameDetails).toHaveBeenCalledWith("3328");
  });
});
