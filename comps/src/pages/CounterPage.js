import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount); // destructure count and handleClick from custom hook

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
