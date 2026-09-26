import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Translations from "@/pages/games-page/GamesPage.translation.json";

import { GamesSection } from "../GamesSection";
import { useGamesList } from "../hooks/useGamesList";

// mock useGamesList
jest.mock("../hooks/useGamesList", () => ({
  useGamesList: jest.fn()
}));

// mock Card
jest.mock("../../card/Card", () => ({
  Card: jest.fn().mockImplementation(() => <div>Card</div>)
}));

describe("GamesSection", () => {
  const useGamesListMock = jest.mocked(useGamesList);

  it("should render the games section", () => {
    useGamesListMock.mockReturnValue({
      gamesData: [
        {
          id: "1",
          title: "Test",
          poster: "/test.jpg"
        }
      ],
      isLoading: false,
      error: null,
      refetch: jest.fn()
    });

    render(<GamesSection />);

    const title = screen.getByRole("heading", { name: Translations.games_section.title });

    expect(title).toBeInTheDocument();
  });

  it("should render the loading state", () => {
    useGamesListMock.mockReturnValue({
      gamesData: undefined,
      isLoading: true,
      error: null,
      refetch: jest.fn()
    });

    render(<GamesSection />);

    const loading = screen.getByText(Translations.games_section.loading);

    expect(loading).toBeInTheDocument();
  });

  it("should render the error state", async () => {
    const refetchMock = jest.fn();
    useGamesListMock.mockReturnValue({
      gamesData: undefined,
      isLoading: false,
      error: new Error("Error"),
      refetch: refetchMock
    });

    render(<GamesSection />);

    const error = screen.getByText(Translations.games_section.error);

    expect(error).toBeInTheDocument();

    const retryButton = screen.getByRole("button", { name: Translations.games_section.retry });
    await userEvent.click(retryButton);

    expect(refetchMock).toHaveBeenCalled();
  });
});
