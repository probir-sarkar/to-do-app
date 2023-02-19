import { createSlice } from "@reduxjs/toolkit";
export const initialUserState = {
  uid: "",
  name: "",
  email: "",
  updating: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, { payload: { email, uid } }) {
      state.email = email;
      state.uid = uid;
    },
    changeUpdating(state, { payload }) {
      state.updating = payload;
    },
  },
});

export const { setUser, changeUpdating } = userSlice.actions;

export default userSlice.reducer;
