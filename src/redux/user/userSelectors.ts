import { userSlice } from "./userSlice";

export const { setCurrentUser, setUserLoading, setUserError } =
  userSlice.actions;

export default userSlice.reducer;
