import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { Search } from "../Search";

describe("Search", () => {
  it("should display the current search value", () => {
    render(<Search search="zelda" onSearch={jest.fn()} />);

    const searchInput = screen.getByPlaceholderText("Buscar juego...");

    expect(searchInput).toHaveValue("zelda");
  });

  it("should update the search value when typing", async () => {
    const user = userEvent.setup();

    const SearchWrapper = () => {
      const [search, setSearch] = useState("");

      return <Search search={search} onSearch={setSearch} />;
    };
    render(<SearchWrapper />);

    const searchInput = screen.getByPlaceholderText("Buscar juego...");

    await user.type(searchInput, "zelda");
    expect(searchInput).toHaveValue("zelda");
  });
});
