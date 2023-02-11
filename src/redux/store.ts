import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../redux/to-do/toDoSlice";

import { toDoItemInterface } from "../redux/to-do/toDoSlice";

export interface RootState {
  toDoList: toDoItemInterface[];
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
