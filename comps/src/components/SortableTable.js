import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null); // null, asc, or desc
  const [sortBy, setSortBy] = useState(null); // designates which column the table is sorting by

  const { config } = props; // props should never be modified in React

  // label below is from column of sortable header clicked
  // cycle goes from null to asc to desc to null, etc.
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null); // column label doesn't matter because table is reverting back to unsorted default
    }
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
