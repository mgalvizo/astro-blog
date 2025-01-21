import { useStore } from "@nanostores/react";
import { globalState } from "../../store/globalStore";

const DisplayAmount = () => {
  const state = useStore(globalState);

  return <h2>{state.count}</h2>;
};

export default DisplayAmount;
