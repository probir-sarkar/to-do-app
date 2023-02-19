import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, { payload: { name, email } }) {
      state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
