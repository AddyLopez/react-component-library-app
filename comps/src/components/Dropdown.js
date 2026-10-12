import { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  const handleClick = () => {
    // Functional style state update deals with edge case scenario
    setIsOpen((currentIsOpen) => !currentIsOpen); // The simple style setIsOpen(!isOpen) would work in the vast majority of cases.
  };

  return (
    <section>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </section>
  );
};

export default Dropdown;
