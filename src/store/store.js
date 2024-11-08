import { createStore } from "redux";
import reducer from "../features/counterSlice";

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
