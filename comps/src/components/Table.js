const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    // uses the render function in the config object to dynamically display each cell's particular datum
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-2">
          {column.render(rowData)}
        </td>
      );
    });

    // no assumptions made about data received to generate a key. burden of passing in a proper key is placed on anyone using the component. rowData is passed into the keyFn function passed down from TablePage
    return (
      <tr key={keyFn(rowData)} className="border-b">
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
