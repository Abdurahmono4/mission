import { createStore } from "redux";
import { Counter } from "./counter";
import { combineReducers } from "redux";
import { cardReducer } from "./addCard";
const rootReducer = combineReducers({
  counter: Counter,
  cards: cardReducer,
});
export const store = createStore(rootReducer);
