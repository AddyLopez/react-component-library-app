import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null); // Expected: either options or null

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <main>
      <Dropdown
        options={options}
        selection={selection}
        onSelect={handleSelect}
      />
    </main>
  );
}

export default App;
