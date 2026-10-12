import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex; // returns a Boolean

    const handleClick = (currentIndex) => {
      // functional state update handles edge case where former simple state update might produce a stale reference
      // currentExpandedIndex below is the most up-to-date reference
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === currentIndex) {
          return -1; // collapse panel
        } else {
          return currentIndex; // expand item at currentIndex
        }
      });
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <article key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </article>
    );
  });

  return (
    <section className="border-x border-t rounded">{renderedItems}</section>
  );
};

export default Accordion;
