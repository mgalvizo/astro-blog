import { increment, decrement } from "../../store/globalStore";

const Counter = () => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
