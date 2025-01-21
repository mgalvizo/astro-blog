import { useStore } from "@nanostores/preact";
import { counter, increment, decrement } from "../../store/counterStore";

const Counter = () => {
  const count = useStore(counter);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
