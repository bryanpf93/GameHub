import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockGameDetail } from "@/api/services/mocks/game-detail.mock";
import { renderWithRouter } from "@/test/render";

import Translations from "../../../GameDetailsPage.translation.json";
import { GameDetailsSection } from "../GameDetailSection";
import { useGameDetails } from "../hooks/useGameDetails";

jest.mock("../hooks/useGameDetails", () => ({
  useGameDetails: jest.fn()
}));

describe("GameDetailSection", () => {
  const mockUseGameDetails = jest.mocked(useGameDetails);

  beforeEach(() => {
    mockUseGameDetails.mockReturnValue({
      gameData: mockGameDetail,
      isLoading: false,
      error: null,
      refetch: jest.fn()
    });
  });

  it("should render details section", () => {
    renderWithRouter(<GameDetailsSection />);

    const title = screen.getByRole("heading", { name: mockGameDetail.title });
    const description = screen.getByText(mockGameDetail.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render loading", () => {
    mockUseGameDetails.mockReturnValue({
      gameData: undefined,
      isLoading: true,
      error: null,
      refetch: jest.fn()
    });

    renderWithRouter(<GameDetailsSection />);

    const loadingText = screen.getByText(Translations.game_details_section.loading);
    expect(loadingText).toBeInTheDocument();
  });

  it("should render error section", async () => {
    const refetchMock = jest.fn();
    mockUseGameDetails.mockReturnValue({
      gameData: undefined,
      isLoading: false,
      error: new Error(),
      refetch: refetchMock
    });

    renderWithRouter(<GameDetailsSection />);

    const errorText = screen.getByText(Translations.game_details_section.error);
    expect(errorText).toBeInTheDocument();

    const buttonTryAgain = screen.getByRole("button", {
      name: Translations.game_details_section.retry
    });
    expect(buttonTryAgain).toBeInTheDocument();

    await userEvent.click(buttonTryAgain);

    expect(refetchMock).toHaveBeenCalled();
  });
});
