import { atom } from "nanostores";

const globalState = atom({ count: 0 });

const increment = () => {
  globalState.set({ count: globalState.get().count + 1 });
};

const decrement = () => {
  globalState.set({ count: globalState.get().count - 1 });
};

export { globalState, increment, decrement };
