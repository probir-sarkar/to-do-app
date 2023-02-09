import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

import toDoSlice from "../redux/to-do/toDoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    toDoList: toDoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
