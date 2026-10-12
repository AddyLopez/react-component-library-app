import { useState } from "react";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Functional style state update deals with edge case scenario
    setIsOpen((currentIsOpen) => !currentIsOpen); // The simple style setIsOpen(!isOpen) would work in the vast majority of cases.
  };

  const handleOptionClick = (option) => {
    setIsOpen(false); // Close dropdown
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <section>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </section>
  );
};

export default Dropdown;
