import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import toDoSlice from "../redux/to-do/toDoSlice";
import { toDoItemInterface } from "../redux/to-do/toDoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
  toDoList: toDoSlice,
});

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDoList: toDoSlice,
});

export interface RootState {
  toDoList: toDoItemInterface[];
}
const persistConfig = {
  key: "root",
  storage,
};

<<<<<<< HEAD
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export { store };
=======
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
>>>>>>> 4affa5a16cbc15e0c955097fd99167a2544f4b2d
