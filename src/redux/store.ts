import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

import toDoSlice from "../redux/to-do/toDoSlice";

export interface toDoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface RootState {
  toDoList: toDoItem[];
}



export default configureStore({
  reducer: {
    toDoList: toDoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
