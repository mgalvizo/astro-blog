import { atom } from "nanostores";

const counter = atom(0);

const increment = () => {
  counter.set(counter.get() + 1);
};

const decrement = () => {
  counter.set(counter.get() - 1);
};

export { counter, increment, decrement };
