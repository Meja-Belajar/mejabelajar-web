import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isUserAlreadyLogin } from "./userThunks";
import {
  LoginUserResponse,
  RegisterUserResponse,
} from "@src/models/responses/userResponse";

type InitialState = {
  currentUser: LoginUserResponse | RegisterUserResponse | null;
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
    setCurrentUser: (
      state,
      action: PayloadAction<LoginUserResponse | RegisterUserResponse | null>,
    ) => {
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
