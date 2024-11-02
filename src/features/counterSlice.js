const initialState = {
  value: 0,
};

// action creator

export function incremented() {
  return { type: "counter/incremented" };
}

export function decremented() {
  return { type: "counter/decremented" };
}

export function incrementedByAmount(amount) {
  return { type: "counter/incrementedByAmount", payload: amount };
}

function counterReducer(state = initialState, action) {
  if (action.type === "counter/incremented") {
    return { ...state, value: state.value + 1 };
  } else if (action.type === "counter/decremented") {
    return { ...state, value: state.value - 1 };
  } else if (action.type === "counter/incrementedByAmount") {
    return { ...state, value: state.value + action.payload };
  }
  return state;
}

export default counterReducer;
