const initialState = {
  counters: [
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 5 },
    { id: 4, value: 3 },
  ],
};

// action creator

export function incremented(counter) {
  return { type: "counter/incremented", payload: counter };
}

export function decremented(counter) {
  return { type: "counter/decremented", payload: counter };
}
export function deleted(counter) {
  return { type: "counter/deleted", payload: counter };
}

export function reset() {
  return { type: "counter/reset" };
}

function counterReducer(state = initialState, action) {
  if (action.type === "counter/incremented") {
    const counters = state.counters.map((c) =>
      c.id === action.payload.id ? { ...c, value: c.value + 1 } : c
    );
    return { ...state, counters };
  } else if (action.type === "counter/decremented") {
    const counters = state.counters.map((c) =>
      c.id === action.payload.id ? { ...c, value: c.value - 1 } : c
    );
    return { ...state, counters };
  } else if (action.type === "counter/deleted") {
    const counters = state.counters.filter((c) => c.id !== action.payload.id);
    return { ...state, counters };
  } else if (action.type === "counter/reset") {
    const counters = state.counters.map((c) => {
      return { ...c, value: 0 };
    });
    return { ...state, counters };
  }
  return state;
}

export default counterReducer;
