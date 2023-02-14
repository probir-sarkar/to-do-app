import { nanoid } from "nanoid";
import { addToDo } from "./toDoSlice";

export const addToDoActions = (state, text) => {
  const newToDo = {
    id: nanoid(),
    text,
    completed: false,
  };
  const newState = [...state, newToDo];
  return addToDo(newState);
};
