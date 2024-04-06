import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery: string;
  isSearchLoading: boolean;
  searchError: string;
}

const initialState = <InitialState>{
  searchQuery: "",
  isSearchLoading: false,
  searchError: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action:PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchLoading: (state, action:PayloadAction<boolean>) => {
      state.isSearchLoading = action.payload;
    },
    setSearchError: (state, action:PayloadAction<string>) => {
      state.searchError = action.payload;
    },
  },
});