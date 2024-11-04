import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  findString: '',
  locationId: 0,
  yearFrom: 0,
  yearTo: 0,
  authorId: 0,
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
  },
});

export default filtersSlice.reducer;
export const {
  setArtistId,
  setLocationId,
  setYearFrom,
  setYearTo,
  setFindString,
} = filtersSlice.actions;
