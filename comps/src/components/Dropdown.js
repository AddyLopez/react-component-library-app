import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  // this effect checks the click location to close the dropdown
  useEffect(() => {
    const handler = (event) => {
      // if the reference is null, simply return. (good practice)
      if (!divEl.current) {
        return;
      }

      // close dropdown if user clicks outside of it. Now, if there are multiple dropdowns, one will not stay open when the other opens.
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true); // third argument regards the Capture phase (of the stages Capture, Target, and Bubble)

    // return a clean up function
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <section ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </section>
  );
};

export default Dropdown;
