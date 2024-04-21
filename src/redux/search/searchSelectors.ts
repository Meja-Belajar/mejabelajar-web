import { searchSlice } from "./searchSlice";

export const { setSearchQuery, setSearchLoading, setSearchError } = searchSlice.actions;

export default searchSlice.reducer;