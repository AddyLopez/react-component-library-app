import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Functional style state update deals with edge case scenario
    setIsOpen((currentIsOpen) => !currentIsOpen); // The simple style setIsOpen(!isOpen) would work in the vast majority of cases.
  };

  const handleOptionClick = (option) => {
    setIsOpen(false); // Close dropdown
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-point p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  // If value is undefined or null, the div will show "Select..." instead of the label
  return (
    <section className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </section>
  );
};

export default Dropdown;
