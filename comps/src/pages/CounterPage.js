import { useState, useEffect } from "react";
import Button from "../components/Button";

const useSomething = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleClick,
  };
};

const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useSomething(initialCount); // destructure count and handleClick from custom hook

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
};

export default CounterPage;
