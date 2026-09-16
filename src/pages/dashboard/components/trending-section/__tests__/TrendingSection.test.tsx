import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Translations from "@/pages/dashboard/DashboardPage.translation.json";

import { useTrendingList } from "../hooks/useTrendingList";
import { TrendingSection } from "../TrendingSection";

// mock useTrendingList
jest.mock("../hooks/useTrendingList", () => ({
  useTrendingList: jest.fn()
}));

// mock Card
jest.mock("../../card/Card", () => ({
  Card: jest.fn().mockImplementation(() => <div>Card</div>)
}));

describe("TrendingSection", () => {
  const useTrendingListMock = jest.mocked(useTrendingList);

  it("should render the trending section", () => {
    useTrendingListMock.mockReturnValue({
      trendingData: [
        {
          id: "1",
          title: "Test",
          poster: "/test.jpg",
          first_air_date: "2023-01-01"
        }
      ],
      isLoading: false,
      error: null,
      refetch: jest.fn()
    });

    render(<TrendingSection />);

    const title = screen.getByRole("heading", { name: Translations.trending_section.title });

    expect(title).toBeInTheDocument();
  });

  it("should render the loading state", () => {
    useTrendingListMock.mockReturnValue({
      trendingData: undefined,
      isLoading: true,
      error: null,
      refetch: jest.fn()
    });

    render(<TrendingSection />);

    const loading = screen.getByText(Translations.trending_section.loading);

    expect(loading).toBeInTheDocument();
  });

  it("should render the error state", async () => {
    const refetchMock = jest.fn();
    useTrendingListMock.mockReturnValue({
      trendingData: undefined,
      isLoading: false,
      error: new Error("Error"),
      refetch: refetchMock
    });

    render(<TrendingSection />);

    const error = screen.getByText(Translations.trending_section.error);

    expect(error).toBeInTheDocument();

    const retryButton = screen.getByRole("button", { name: Translations.trending_section.retry });
    await userEvent.click(retryButton);

    expect(refetchMock).toHaveBeenCalled();
  });
});
