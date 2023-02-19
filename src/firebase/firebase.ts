// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { store } from "../redux/store";
import { updateToDo } from "../redux/to-do/toDoSlice";

const firebaseConfig = {
  apiKey: "AIzaSyCbxCJ_JTHQe6gE0Mtz3FOsM88oFJemEus",
  authDomain: "probir-to-do.firebaseapp.com",
  databaseURL: "https://probir-to-do-default-rtdb.firebaseio.com",
  projectId: "probir-to-do",
  storageBucket: "probir-to-do.appspot.com",
  messagingSenderId: "999858928078",
  appId: "1:999858928078:web:d2d164a6ab7f2f6781939f",
};

export interface toDoItemInterface {
  id: string;
  text: string;
  completed: boolean;
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const email = store.getState().user.email;
const userId = store.getState().user.uid;
const db = getDatabase(app);
const todoRef = ref(db, "users/" + userId);

onValue(todoRef, (snapshot) => {
  const data = snapshot.val()?.ToDoList;
  if (data) {
    store.dispatch(updateToDo(data));
  } else {
    store.dispatch(updateToDo([]));
  }
});

export const updateFirebase = (value: toDoItemInterface[], userId) => {
  set(ref(db, "users/" + userId), {
    ToDoList: value,
  });
};
