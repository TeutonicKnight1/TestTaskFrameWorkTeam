import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import paginationSlice from './slices/paginationSlice';
import themeSlice from './slices/themeSlice';
import filtersSlice from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    pagination: paginationSlice,
    theme: themeSlice,
    filters: filtersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
