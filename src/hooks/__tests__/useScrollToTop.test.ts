import { renderHook } from "@testing-library/react";

import { useScrollToTop } from "../useScrollToTop";

describe("useScrollToTop", () => {
  it("should scroll to top on mount", () => {
    const scrollToMock = jest.fn();

    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
      writable: true
    });

    renderHook(() => useScrollToTop());

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth"
    });
  });
});
