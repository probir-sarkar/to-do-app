import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { toDoInitialStage } from "./toDoInitialStage";

const initialState = toDoInitialStage();


export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      const newToDo = {
        id: nanoid(),
        text: payload,
        completed: false,
      };
      const newState = [...state, newToDo];
      return newState;
    },

    removeToDo: (state, { payload }) => {
      const newState = state.filter((toDo:toDoInterface) => toDo.id !== payload);
      return newState;
    },

    toggleStatusToDo: (state, { payload }) => {
      const newState = state.map((toDo: toDoInterface) => {
        if (toDo.id === payload) {
          return { ...toDo, completed: !toDo.completed };
        }
        return toDo;
      });
      return newState;
    },
  },
});

export const { addToDo, removeToDo, toggleStatusToDo, } =
  toDoSlice.actions;

export default toDoSlice.reducer;
