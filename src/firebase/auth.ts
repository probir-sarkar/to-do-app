import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { store } from "../redux/store";
import { setUser } from "../redux/user/userSlice";
export const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser({ email: user.email, uid: user.uid }));
  } else {
    store.dispatch(setUser({ email: "" }));
  }
});

export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    const errorMessage = error.code.split("/")[1].replace(/-/g, " ");
    throw new Error(errorMessage);
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error: any) {
    const errorMessage = error.code.split("/")[1].replace(/-/g, " ");
    throw new Error(errorMessage);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    const errorMessage = error.code.split("/")[1].replace(/-/g, " ");
    throw new Error(errorMessage);
  }
};
