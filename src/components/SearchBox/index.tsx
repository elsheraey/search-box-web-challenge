import React from "react";
import magnifierIcon from "../../assets/icons/magnifier.svg";
import "./style.css";
import Suggestion from "./Suggestion";
import SuggestionList from "./SuggestionsList";

// NOTE: I could have had this interface extend or to be composed of the HTMLInputElement interface
//       but I decided to keep it simple and only have the properties I need, however,
//       if it I had decided to go the other way, I would have added renderInput, renderSuggestion, etc.
//       for the added configurability.

// NOTE: I have followed this guideline "All event handlers, state variables should be provided to the component via props"
//       I understand its benefits to reusability and testability, however, I felt that it was not necessary
//       the use of an internal state would have sufficed for a lot of scenarios...
interface SearchBoxProps {
  active: boolean;
  setActive: (isActive: boolean) => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  onInputChange?: (value: string) => void;

  suggestions?: Suggestion[];
  onSubmit?: (value: string) => void;

  placeholder?: string;
  onEscape?: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  active,
  setActive,

  inputValue = "",
  setInputValue,

  onInputChange,

  suggestions = [],
  onSubmit,

  placeholder,
  onEscape,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onInputChange) {
      onInputChange(value);
    } else {
      setInputValue(value);
      setActive(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit(inputValue);
    } else if (event.key === "Escape") {
      if (onEscape) {
        onEscape();
      } else {
        setActive(false);
        setInputValue("");
      }
    }
  };

  const handleFocus = () => void setActive(true);
  const handleBlur = () => void setActive(false);

  return (
    <div className={`search-box ${active ? "expanded" : ""}`}>
      <img alt="" className="search-icon" src={magnifierIcon} />

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder ?? "Search..."}
        // NOTE: I added this mainly because I was trying something with RTL (React Testing Library)
        data-testid="search-input"
      />

      {active && (
        <SuggestionList suggestions={suggestions} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default SearchBox;
