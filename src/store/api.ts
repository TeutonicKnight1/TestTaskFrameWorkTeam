import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Painting } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: builder => ({
    getData: builder.query<Painting[], void>({
      query: () => 'paintings',
    }),
    getImage: builder.query<string, string>({
      query: name => `images/${name}.png`,
    }),
  }),
});

export const { useGetDataQuery, useGetImageQuery } = api;
