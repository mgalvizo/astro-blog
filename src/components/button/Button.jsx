import { increment } from "../../store/globalStore";

const Button = () => {
  return (
    <button type="button" onClick={increment}>
      Increment
    </button>
  );
};

export default Button;
