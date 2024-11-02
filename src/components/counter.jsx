import { useDispatch } from "react-redux";
import { incremented, decremented, deleted } from "../features/counterSlice";

const Counter = ({ counter }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{counter.value}</span>
      <button onClick={() => dispatch(decremented(counter))}>Decrement</button>
      <button onClick={() => dispatch(incremented(counter))}>Increment</button>
      <button onClick={() => dispatch(deleted(counter))}>Delete</button>
    </div>
  );
};

export default Counter;
