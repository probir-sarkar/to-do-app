import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const toDoList = (state: RootState) => state.toDoList;

export const selectToDoList = createSelector(toDoList, (toDoList) => toDoList);

export const selectToDoListCompleted = createSelector(toDoList, (toDoList) =>
  toDoList.filter((toDo) => toDo.completed)
);

export const selectToDoListUncompleted = createSelector(toDoList, (toDoList) =>
  toDoList.filter((toDo) => !toDo.completed)
);
