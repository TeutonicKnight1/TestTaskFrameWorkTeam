import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
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
  },
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;
