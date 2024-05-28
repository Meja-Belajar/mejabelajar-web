import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isUserAlreadyLogin } from "./userThunks.ts";
import { UserDTO } from "@src/models/dtos/userDTO.ts";

type InitialState = {
  currentUser: UserDTO | null;
  isUserLoading: boolean;
  userError: string;
};

const initialState = <InitialState>{
  currentUser: null,
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
  extraReducers: (builder) => {
    builder.addCase(isUserAlreadyLogin.pending, (state) => {
      state.isUserLoading = true;
    });
    builder.addCase(isUserAlreadyLogin.fulfilled, (state, action: PayloadAction<UserDTO>) => {
      state.currentUser = action.payload;
      state.isUserLoading = false;
    });
    builder.addCase(isUserAlreadyLogin.rejected, (state) => {
      state.isUserLoading = false;
      state.userError = 'Failed to initialize user';
    });
  }
});

export { userSlice };
