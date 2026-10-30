const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    // uses the render function in the config object to dynamically display each cell's particular datum
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-2">
          {column.render(fruit)}
        </td>
      );
    });

    return (
      <tr key={fruit.name} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
