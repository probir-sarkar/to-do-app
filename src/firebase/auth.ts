import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { store } from "../redux/store";
import { setUser } from "../redux/user/userSlice";
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser({ email: user.email, uid: user.uid }));
  } else {
    store.dispatch(setUser({ email: "" }));
  }
});
