import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithRouter } from "@/test/render";

import App from "../App";

// mock GamesPage
jest.mock("@/pages/games-page/GamesPage", () => ({
  // GamesPage: jest.fn().mockImplementation(() => <div>GamesPage</div>)
  // se puede retornar directamente el valor (no una función) con mockReturnValue
  GamesPage: jest.fn().mockReturnValue(<div>GamesPage</div>)
}));

// mock GameDetailsPage
jest.mock("../pages/game-details-page/GameDetailsPage", () => ({
  GameDetailsPage: jest.fn().mockImplementation(() => <div>GameDetailsPage</div>)
}));

describe("App", () => {
  const renderApp = (route = "/") => {
    return renderWithRouter(<App />, { route });
  };

  it("should render the logo", () => {
    renderApp();
    // const logo = screen.getByTestId("logo");
    // const logo = screen.getByText("GAMEHUB");
    // const logo = screen.getByLabelText("logo-label")
    // const logo = screen.getByRole("heading", { name: "GAMEHUB" });
    const logo = screen.getByRole("heading", { name: "logo-label" });

    expect(logo).toBeInTheDocument();
  });

  it("should render the home page on the root route", () => {
    renderApp("/");

    const home = screen.getByRole("heading", { name: "Home Page" });

    expect(home).toBeInTheDocument();
  });

  it("should navigate to the games page when clicking the logo", async () => {
    renderApp("/");

    const logoLink = screen.getByRole("link", { name: "home-link" });
    await userEvent.click(logoLink);

    // SIN MOCK -> busca el elemento real del componente GamesPage/GamesSection
    // const gamesPage = screen.getByRole("heading", { name: "Juegos" });
    // CON MOCK -. busca el texto mockeado
    const gamesPage = screen.getByText("GamesPage");
    expect(gamesPage).toBeInTheDocument();

    expect(screen.queryByRole("heading", { name: "Home Page" })).not.toBeInTheDocument();
  });
});
