const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
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
