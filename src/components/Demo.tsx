import { useState } from "react";
import appleIcon from "../assets/icons/apple.png";
import bananaIcon from "../assets/icons/banana.png";
import SearchBox from "./SearchBox";
import Suggestion from "./SearchBox/Suggestion";

// NOTE: If I had more time, I would have probably built an Autocomplete component using the SearchBox component

export default function Demo() {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // NOTE: I would have used this hook if had some API calls or heavy computations to make
  // const debouncedInputValue = useDebounce(inputValue, 500);

  // NOTE: I could have also added filteration, sorting, limiting, caching, etc. to the suggestions
  //       but I decided to keep it simple and only satisfy the requirements for this demo

  const suggestions = [
    { value: "Apple", icon: appleIcon },
    { value: "Banana", icon: bananaIcon },
    { value: "Eat", category: "Actions" },
  ];

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setActive(true);
  };

  const handleSubmit = (value: string | Suggestion) => {
    console.log("Submitted:", value);
    setInputValue("");
  };

  const handleEscape = () => {
    setActive(false);
    setInputValue("");
  };

  return (
    <SearchBox
      active={active}
      setActive={setActive}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      suggestions={suggestions}
      onSubmit={handleSubmit}
      onEscape={handleEscape}
    />
  );
}
