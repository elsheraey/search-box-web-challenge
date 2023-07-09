import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

describe("SearchBox component", () => {
  test("should render the search box correctly with the initial inputValue and default placeholder", () => {
    const active = true;
    const setActive = jest.fn();

    const inputValue = "example";
    const setInputValue = jest.fn();

    render(
      <SearchBox
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toHaveValue(inputValue);
    expect(screen.getByTestId("search-input")).toHaveAttribute(
      "placeholder",
      "Search..."
    );
  });

  test("should render suggestions in active mode", () => {
    const active = true;
    const setActive = jest.fn();

    const inputValue = "example";
    const setInputValue = jest.fn();

    const suggestions = [{ value: "Apple" }, { value: "Banana" }];

    render(
      <SearchBox
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
        suggestions={suggestions}
      />
    );

    suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion.value)).toBeInTheDocument();
    });
  });

  test("should not render suggestions in idle mode", () => {
    const active = false;
    const setActive = jest.fn();

    const inputValue = "";
    const setInputValue = jest.fn();

    const suggestions = [{ value: "Apple" }, { value: "Banana" }];

    render(
      <SearchBox
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
        suggestions={suggestions}
      />
    );

    suggestions.forEach((suggestion) => {
      expect(screen.queryByText(suggestion.value)).not.toBeInTheDocument();
    });
  });

  test("should call onSubmit when Enter key is pressed", () => {
    const active = true;
    const setActive = jest.fn();

    const inputValue = "example";
    const setInputValue = jest.fn();

    const onSubmit = jest.fn();

    render(
      <SearchBox
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={onSubmit}
      />
    );

    fireEvent.keyDown(screen.getByTestId("search-input"), {
      key: "Enter",
      code: "Enter",
    });

    expect(onSubmit).toHaveBeenCalledWith(inputValue);
  });

  test("should call onEscape when Escape key is pressed", () => {
    const active = true;
    const setActive = jest.fn();

    const inputValue = "example";
    const setInputValue = jest.fn();

    const onEscape = jest.fn();

    render(
      <SearchBox
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onEscape={onEscape}
      />
    );

    fireEvent.keyDown(screen.getByTestId("search-input"), {
      key: "Escape",
      code: "Escape",
    });

    expect(onEscape).toHaveBeenCalled();
  });
});
