import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  findString: '',
  locationId: 0,
  yearFrom: '',
  yearTo: '',
  authorId: 0,

  filtersIsOpen: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setArtistId(state, action) {
      state.authorId = action.payload;
    },
    setLocationId(state, action) {
      state.locationId = action.payload;
    },
    setYearFrom(state, action) {
      state.yearFrom = action.payload;
    },
    setYearTo(state, action) {
      state.yearTo = action.payload;
    },
    setFindString(state, action) {
      state.findString = action.payload;
    },
    clearFilters(state) {
      state.findString = '';
      state.locationId = 0;
      state.yearFrom = '';
      state.yearTo = '';
      state.authorId = 0;
    },
    setFiltersIsOpen(state, action) {
      state.filtersIsOpen = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  setArtistId,
  setLocationId,
  setYearFrom,
  setYearTo,
  setFindString,
  clearFilters,
  setFiltersIsOpen,
} = filtersSlice.actions;
