import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incremented,
  decremented,
  incrementedByAmount,
} from "../features/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const amountRef = useRef();
  return (
    <div>
      <button onClick={() => dispatch(decremented())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(incremented())}>+</button>
      <hr />
      <p>Incrementer par une valeur</p>
      saisir la valeur:{" "}
      <input
        ref={amountRef}
        onChange={(e) => {
          dispatch(incrementedByAmount(Number(amountRef.current.value)));
        }}
        type="text"
      />{" "}
      {/* <button onClick={() => dispatch(incrementedByAmount(Number(amount)))}>
        Increment by {amount}
      </button> */}
    </div>
  );
};

export default Counter;
