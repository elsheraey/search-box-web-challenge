import Suggestion from "./Suggestion";
import SuggestionItem from "./SuggestionItem";

interface SuggestionListProps {
  suggestions: Suggestion[];
  onSubmit?: (value: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  suggestions,
  onSubmit,
}) => {
  const uncategorizedSuggestions: Suggestion[] = [];
  const categorizedSuggestions: Map<string | undefined, Suggestion[]> =
    new Map();

  suggestions.forEach((suggestion) => {
    if (suggestion.category) {
      const categorySuggestions =
        categorizedSuggestions.get(suggestion.category) || [];

      categorySuggestions.push(suggestion);
      categorizedSuggestions.set(suggestion.category, categorySuggestions);
    } else {
      uncategorizedSuggestions.push(suggestion);
    }
  });

  return (
    <div className="suggestions">
      {suggestions.length === 0 && (
        <div className="no-suggestions">No suggestions</div>
      )}

      {uncategorizedSuggestions.map((suggestion, index) => (
        <SuggestionItem
          key={index}
          suggestion={suggestion}
          onSubmit={onSubmit}
        />
      ))}

      {Array.from(categorizedSuggestions.entries()).map(
        ([category, categorySuggestions]) => (
          <div key={category}>
            <div className="category-name">{category}</div>
            {categorySuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                suggestion={suggestion}
                onSubmit={onSubmit}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SuggestionList;
