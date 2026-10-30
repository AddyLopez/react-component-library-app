import Table from "./Table";

const SortableTable = (props) => {
  const { config } = props; // props should never be modified in React

  const handleClick = (label) => {
    console.log(label); // label from column of sortable header clicked
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    // returns a new object (NOT modified props) with all the old key-value pairs and now a new header function
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  // new config prop (updatedConfig) will override the old config prop in ...props
  return <Table {...props} config={updatedConfig} />;
};

export default SortableTable;
