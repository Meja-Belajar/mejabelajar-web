import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isUserAlreadyLogin } from "./userThunks";
import { UserDTO } from "@src/models/dtos/userDTO";

type InitialState = {
  currentUser: UserDTO | null;
  isUserLoading: boolean;
  userError: string;
};

const initialState = <InitialState>{
  currentUser: isUserAlreadyLogin(),
  isUserLoading: false,
  userError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserDTO | null>) => {
      state.currentUser = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserLoading = action.payload;
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
    },
  },
});

export { userSlice };
