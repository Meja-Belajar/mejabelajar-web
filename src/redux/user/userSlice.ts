import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserReponse } from '@src/models/responses/user_response';
import { isUserAlreadyLogin } from './userThunks';

interface InitialState {
  currentUser: UserReponse | null;
  isUserLoading: boolean;
  userError: string;
}

const initialState = <InitialState>{
  currentUser: isUserAlreadyLogin(),
  isUserLoading: false,
  userError: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action:PayloadAction<UserReponse | null>) => {
      state.currentUser = action.payload;
    },
    setUserLoading: (state, action:PayloadAction<boolean>) => {
      state.isUserLoading = action.payload;
    },
    setUserError: (state, action:PayloadAction<string>) => {
      state.userError = action.payload;
    },
  },
});