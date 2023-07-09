import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

describe("SearchBox component", () => {
  const filledInputValue = "example";
  const emptyInputValue = "";

  const suggestions = [{ value: "Apple" }, { value: "Banana" }];

  const setActive = jest.fn();
  const setInputValue = jest.fn();
  const onSubmit = jest.fn();
  const onEscape = jest.fn();

  test("should render the search box correctly with the initial inputValue and default placeholder", () => {
    const inputValue = "example";

    render(
      <SearchBox
        active={true}
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
    render(
      <SearchBox
        active={true}
        setActive={setActive}
        inputValue={filledInputValue}
        setInputValue={setInputValue}
        suggestions={suggestions}
      />
    );

    suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion.value)).toBeInTheDocument();
    });
  });

  test("should not render suggestions in idle mode", () => {
    render(
      <SearchBox
        active={false}
        setActive={setActive}
        inputValue={emptyInputValue}
        setInputValue={setInputValue}
        suggestions={suggestions}
      />
    );

    suggestions.forEach((suggestion) => {
      expect(screen.queryByText(suggestion.value)).not.toBeInTheDocument();
    });
  });

  test("should call onSubmit when Enter key is pressed", () => {
    render(
      <SearchBox
        active={true}
        setActive={setActive}
        inputValue={filledInputValue}
        setInputValue={setInputValue}
        onSubmit={onSubmit}
      />
    );

    fireEvent.keyDown(screen.getByTestId("search-input"), {
      key: "Enter",
      code: "Enter",
    });

    expect(onSubmit).toHaveBeenCalledWith(filledInputValue);
  });

  test("should call onEscape when Escape key is pressed", () => {
    render(
      <SearchBox
        active={true}
        setActive={setActive}
        inputValue={filledInputValue}
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
