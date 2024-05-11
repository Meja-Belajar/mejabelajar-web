import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSelectors";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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
