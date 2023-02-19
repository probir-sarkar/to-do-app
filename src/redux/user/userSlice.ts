import { createSlice } from "@reduxjs/toolkit";
export const initialUserState = {
  uid: "",
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, { payload: { email, uid } }) {
      state.email = email;
      state.uid = uid;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
