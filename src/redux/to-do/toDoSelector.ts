import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectToDoList = (state: RootState) => state.toDoList;
