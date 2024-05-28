import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import userReducer from "./user/userSelectors.ts";
import { configureStore } from "@reduxjs/toolkit";
import { isUserAlreadyLogin } from "./user/userThunks.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.dispatch(isUserAlreadyLogin());

export const useAppDispath: () => typeof store.dispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
