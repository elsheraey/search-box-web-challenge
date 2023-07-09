import React from "react";
import magnifierIcon from "../../assets/icons/magnifier.svg";
import Suggestion from "./Suggestion";

interface SuggestionItemProps {
  suggestion: Suggestion;
  onSubmit?: (value: string) => void;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({
  suggestion,
  onSubmit,
}) => {
  const handleSuggestionClick = (suggestion: Suggestion) => () => {
    if (onSubmit) {
      onSubmit(suggestion.value);
    }
  };

  return (
    // REFACTOR: Use a button? Also work around the onBlur blocking the onClick event
    //           as this work around might cause some accessibility issues
    <div
      className="suggestion-item"
      onMouseDown={handleSuggestionClick(suggestion)}
    >
      <img
        alt=""
        className="suggestion-icon"
        src={suggestion.icon ? suggestion.icon : magnifierIcon}
      />
      <span className="suggestion-value">{suggestion.value}</span>
    </div>
  );
};

export default SuggestionItem;
