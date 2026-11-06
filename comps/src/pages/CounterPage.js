import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  // must not mutate original state object. Therefore, copy over properties from previous state object and return a new object with updated properties.
  // check action type to determine which slice of state to update
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "change-value-to-add") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  return state; // must return a value from reducer function or state will be undefined
};

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment",
    }); // dispatch updates the state. any arguments provided to dispatch are the action argument in the reducer function
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const numberValue = parseInt(event.target.value) || 0; // converts string to integer. if empty string produces NaN (Not a Number), set numberValue to zero.

    dispatch({
      type: "change-value-to-add",
      payload: numberValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  // in input, value is either valueToAdd OR an empty string for better UI/UX so that a zero isn't shown by default
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
