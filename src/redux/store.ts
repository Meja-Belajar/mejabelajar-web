import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import userReducer from "./user/userSelectors.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const useAppDispath: () => typeof store.dispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
