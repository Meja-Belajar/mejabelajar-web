import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  searchQuery: string;
  isSearchLoading: boolean;
  searchError: string;
}

const initialState = <InitialState>{
  searchQuery: "",
  isSearchLoading: false,
  searchError: "",
};

const searchSlice = createSlice({
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

export { searchSlice };