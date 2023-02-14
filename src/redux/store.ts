import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import toDoSlice from "../redux/to-do/toDoSlice";
import { toDoItemInterface } from "../redux/to-do/toDoSlice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDoList: toDoSlice,
});

export interface RootState {
  toDoList: toDoItemInterface[];
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export { store };
