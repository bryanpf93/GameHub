import { render, screen } from "@testing-library/react";

import { Pagination } from "../Pagination";

describe("Pagination", () => {
  it("should render the current page", () => {
    render(
      <Pagination page={1} onPreviousPage={jest.fn()} onNextPage={jest.fn()} hasNextPage={true} />
    );

    expect(screen.getByText("Página 1")).toBeInTheDocument();
  });

  it("should display the previous button when page is greater than 1", () => {
    render(
      <Pagination page={2} onPreviousPage={jest.fn()} onNextPage={jest.fn()} hasNextPage={true} />
    );

    expect(screen.getByRole("button", { name: "Anterior" })).toBeInTheDocument();
  });

  it("should not display the previous button on the first page", () => {
    render(
      <Pagination page={1} onPreviousPage={jest.fn()} onNextPage={jest.fn()} hasNextPage={true} />
    );

    expect(screen.queryByRole("button", { name: "Anterior" })).not.toBeInTheDocument();
  });

  it("should display the next button when there is a next page", () => {
    render(
      <Pagination page={1} onPreviousPage={jest.fn()} onNextPage={jest.fn()} hasNextPage={true} />
    );

    expect(screen.getByRole("button", { name: "Siguiente" })).toBeInTheDocument();
  });

  it("should not display the next button when there is no next page", () => {
    render(
      <Pagination page={3} onPreviousPage={jest.fn()} onNextPage={jest.fn()} hasNextPage={false} />
    );

    expect(screen.queryByRole("button", { name: "Siguiente" })).not.toBeInTheDocument();
  });

  it("should call onPreviousPage when clicking the previous button", () => {
    const onPreviousPage = jest.fn();

    render(
      <Pagination
        page={2}
        onPreviousPage={onPreviousPage}
        onNextPage={jest.fn()}
        hasNextPage={true}
      />
    );

    const previousButton = screen.getByRole("button", { name: "Anterior" });

    previousButton.click();

    expect(onPreviousPage).toHaveBeenCalled();
  });

  it("should call onNextPage when clicking the next button", () => {
    const onNextPage = jest.fn();

    render(
      <Pagination page={1} onPreviousPage={jest.fn()} onNextPage={onNextPage} hasNextPage={true} />
    );

    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    nextButton.click();

    expect(onNextPage).toHaveBeenCalled();
  });
});
