import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex; // returns a Boolean

    console.log(isExpanded);

    return (
      <article key={item.id}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </article>
    );
  });

  return <section>{renderedItems}</section>;
};

export default Accordion;
