import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null); // null, asc, or desc
  const [sortBy, setSortBy] = useState(null); // designates which column the table is sorting by

  const { config, data } = props; // props should never be modified in React

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
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  let sortedData = data; // Use let because the sort function later WILL mutate sortData.

  // if either sortOrder or sortBy is falsy (i.e. null), no sorting needs to be done
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy); // finds correct column in config to sort by. destructures sortValue since the entire column object is not needed for sorting

    // Make a copy of data to sort so that props aren't mutated with JS sort function.
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      } else {
        return null;
      }
    });
  }

  // new config prop (updatedConfig) will override the old config prop in ...props
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return "Show both icons"; // Show both icons if not sorting by this particular column
  }

  if (sortOrder === null) {
    return "Show both icons";
  } else if (sortOrder === "asc") {
    return "Show up icon";
  } else if (sortOrder === "desc") {
    return "Show down icon";
  }
};

export default SortableTable;
