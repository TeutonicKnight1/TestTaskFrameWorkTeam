import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  limit: 6,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = Math.ceil(action.payload / 6);
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages, setLimit } =
  paginationSlice.actions;
export default paginationSlice.reducer;
