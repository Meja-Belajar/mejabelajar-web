import { userSlice } from "./userSlice.ts";

export const { setCurrentUser, setUserLoading, setUserError } =
  userSlice.actions;

export default userSlice.reducer;
