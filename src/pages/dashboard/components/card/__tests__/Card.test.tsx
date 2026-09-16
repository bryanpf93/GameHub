import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Card } from "../Card";

describe("Card", () => {
  it("should render correctly", () => {
    render(<Card title="Card" poster="https://via.placeholder.com/150" date="2023-01-01" />);

    const title = screen.getByRole("heading", { name: "Card" });
    const poster = screen.getByRole("img");
    const date = screen.getByText("2023-01-01");

    expect(title).toBeInTheDocument();
    expect(poster).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const onClick = jest.fn();
    render(
      <Card
        title="Card"
        poster="https://via.placeholder.com/150"
        date="2023-01-01"
        onClick={onClick}
      />
    );

    const button = screen.getByRole("button", { name: "Watch" });
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should call onFavorite when clicked", async () => {
    const onFavorite = jest.fn();
    render(
      <Card
        title="Card"
        poster="https://via.placeholder.com/150"
        date="2023-01-01"
        onFavorite={onFavorite}
      />
    );

    const buttonFavorite = screen.getByRole("button", { name: "Favorite" });
    await userEvent.click(buttonFavorite);

    expect(onFavorite).toHaveBeenCalledWith(true);

    const buttonUnfavorite = screen.getByRole("button", { name: "Unfavorite" });
    await userEvent.click(buttonUnfavorite);

    expect(onFavorite).toHaveBeenCalledWith(false);
  });
});
