// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { store } from "../redux/store";

const firebaseConfig = {
  apiKey: "AIzaSyCbxCJ_JTHQe6gE0Mtz3FOsM88oFJemEus",
  authDomain: "probir-to-do.firebaseapp.com",
  databaseURL: "https://probir-to-do-default-rtdb.firebaseio.com",
  projectId: "probir-to-do",
  storageBucket: "probir-to-do.appspot.com",
  messagingSenderId: "999858928078",
  appId: "1:999858928078:web:d2d164a6ab7f2f6781939f",
};

const ENV = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

console.log(ENV);

export interface toDoItemInterface {
  id: string;
  text: string;
  completed: boolean;
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const email = store.getState().user.email;
const userId = store.getState().user.uid;
export const db = getDatabase(app);
export const todoRef = ref(db, "users/" + userId);

export const updateFirebase = (value: toDoItemInterface[], userId) => {
  console.log("updateFirebase");

  set(ref(db, "users/" + userId), {
    ToDoList: value,
  })
    .then(() => {
      // console.log("Data saved successfully!");
    })
    .catch((error) => {
      // console.log("Data could not be saved." + error);
    });
};
