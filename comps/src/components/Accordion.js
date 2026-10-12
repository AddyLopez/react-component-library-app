import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    if (index === expandedIndex) {
      console.log("expanded");
    } else {
      console.log("collapsed");
    }

    return (
      <article key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </article>
    );
  });

  return <section>{renderedItems}</section>;
};

export default Accordion;
