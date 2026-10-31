import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";

const SortableTable = (props) => {
  const { config, data } = props; // props should never be modified in React

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    // returns a new object (NOT modified props) with all the old key-value pairs and now a new header function
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // new config prop (updatedConfig) will override the old config prop in ...props
  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    ); // Show both icons if not sorting by this particular column
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
