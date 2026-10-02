import { useQuery } from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";

import { useGamesList } from "../useGamesList";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn()
}));

describe("useGamesList", () => {
  const mockUseQuery = jest.mocked(useQuery);

  it("should return games data", () => {
    mockUseQuery.mockReturnValue({
      data: [
        {
          id: "1",
          title: "zelda",
          poster: "/zelda.jpg"
        }
      ],
      isLoading: false,
      error: null,
      refetch: jest.fn()
    } as unknown as ReturnType<typeof useQuery>);

    const { result } = renderHook(() => useGamesList("", 1));

    expect(result.current.gamesData).toEqual([
      {
        id: "1",
        title: "zelda",
        poster: "/zelda.jpg"
      }
    ]);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should wait 500ms before searching", () => {
    jest.useFakeTimers();

    mockUseQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      refetch: jest.fn()
    } as unknown as ReturnType<typeof useQuery>);

    const { rerender } = renderHook(({ search, page }) => useGamesList(search, page), {
      initialProps: {
        search: "",
        page: 1
      }
    });

    rerender({ search: "zelda", page: 1 });

    const queryCallBeforeDebounce = mockUseQuery.mock.calls.at(-1)?.[0];

    expect(queryCallBeforeDebounce?.queryKey).toEqual(["games", "", 1]);

    act(() => {
      jest.advanceTimersByTime(500);
    });

    const queryCallAfterDebounce = mockUseQuery.mock.calls.at(-1)?.[0];

    expect(queryCallAfterDebounce?.queryKey).toEqual(["games", "zelda", 1]);

    jest.useRealTimers();
  });

  it("should clear the timeout when search changes", () => {
    jest.useFakeTimers();

    const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");

    mockUseQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      refetch: jest.fn()
    } as unknown as ReturnType<typeof useQuery>);

    const { rerender } = renderHook(({ search, page }) => useGamesList(search, page), {
      initialProps: {
        search: "",
        page: 1
      }
    });

    act(() => {
      rerender({ search: "zelda", page: 1 });
    });

    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
    jest.useRealTimers();
  });
});
