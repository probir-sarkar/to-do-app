import { nanoid } from "nanoid";
// use local storage to store the data
export const toDoInitialStage = [
  {
    id: nanoid(),
    text: "Learn React",
    completed: false,
  },
  {
    id: nanoid(),
    text: "Learn Redux",
    completed: false,
  },
  {
    id: nanoid(),
    text: "Learn Redux-Toolkit",
    completed: false,
  },
  {
    id: nanoid(),
    text: "Learn React-Redux",
    completed: true,
  },
  {
    id: nanoid(),
    text: "Learn React-Redux-Toolkit",
    completed: true,
  },
];
