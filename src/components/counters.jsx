import { useSelector } from "react-redux";
import Counter from "./counter";

import { reset } from "../features/counterSlice";
import { useDispatch } from "react-redux";

const Counters = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        {counters.map((counter) => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </div>
    </>
  );
};

export default Counters;
