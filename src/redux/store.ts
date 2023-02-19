import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../redux/to-do/toDoSlice";
import { toDoItemInterface } from "../redux/to-do/toDoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import userSlice from "../redux/user/userSlice";

const rootReducer = combineReducers({
  toDoList: toDoSlice,
  user: userSlice,
});

export interface RootState {
  toDoList: toDoItemInterface[];
  user: {
    name: string;
    email: string;
    uid: string;
  };
}
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["toDoList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
