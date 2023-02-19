import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const user = (state: RootState) => state.user;

export const selectUser = createSelector(user, (user) => user);

export const selectUserEmail = createSelector(user, (user) => user.email);

export const selectUserId = createSelector(user, (user) => user.uid);
