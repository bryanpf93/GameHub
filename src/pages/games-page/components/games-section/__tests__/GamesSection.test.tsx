import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Translations from "@/pages/games-page/GamesPage.translation.json";
import { renderWithRouter } from "@/test/render";

import { GamesSection } from "../GamesSection";
import { useGamesList } from "../hooks/useGamesList";

// mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn().mockImplementation(() => mockNavigate)
}));

// mock useGamesList
jest.mock("../hooks/useGamesList", () => ({
  useGamesList: jest.fn()
}));

describe("GamesSection", () => {
  const useGamesListMock = jest.mocked(useGamesList);

  const renderGamesSection = () => {
    return renderWithRouter(<GamesSection />);
  };

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

    renderGamesSection();
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

    renderGamesSection();

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

    renderGamesSection();

    const error = screen.getByText(Translations.games_section.error);

    expect(error).toBeInTheDocument();

    const retryButton = screen.getByRole("button", { name: Translations.games_section.retry });
    await userEvent.click(retryButton);

    expect(refetchMock).toHaveBeenCalled();
  });

  it("should navigate when click card", async () => {
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

    renderGamesSection();

    const detailButton = screen.getByRole("button", { name: "Watch" });
    await userEvent.click(detailButton);

    //expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/games/1");
  });
  it("should search games when typing", async () => {
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

    renderGamesSection();

    const searchInput = screen.getByPlaceholderText("Buscar juego...");

    await userEvent.type(searchInput, "zelda");

    expect(useGamesListMock).toHaveBeenLastCalledWith("zelda");
  });
});
