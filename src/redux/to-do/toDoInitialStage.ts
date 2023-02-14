import { nanoid } from "nanoid";
// use local storage to store the data
<<<<<<< HEAD
export const toDoInitialStage = [];
=======
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
>>>>>>> 4affa5a16cbc15e0c955097fd99167a2544f4b2d
