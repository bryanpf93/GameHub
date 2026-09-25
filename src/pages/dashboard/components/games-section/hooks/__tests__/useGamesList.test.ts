import { renderHook } from "@testing-library/react";

import { useGamesList } from "../useGamesList";

// mock getGames
jest.mock("@/api/services/games.service", () => ({
  getGames: jest.fn()
}));

describe("useGamesList", () => {
  it("should return games data", () => {
    const { result } = renderHook(() => useGamesList());

    expect(result.current.gamesData).toBeDefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});
