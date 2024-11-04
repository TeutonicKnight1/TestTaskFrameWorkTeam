import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPainting } from '../models/IPainting';
import { ILocation } from '../models/ILocation';
import { IAuthor } from '../models/IAuthor';

interface ResponseData {
  data: IPainting[];
  totalCount: number;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team' }),
  endpoints: builder => ({
    getPictures: builder.query<
      ResponseData,
      { _page?: number; _limit?: number }
    >({
      query: ({ _page = 1, _limit = 6 }) => ({
        url: '/paintings',
        params: {
          _page: _page,
          _limit: _limit,
        },
      }),
      transformResponse: (response: IPainting[], meta) => ({
        data: response,
        totalCount: Number(meta?.response?.headers.get('x-total-count')),
      }),
    }),
    getAuthors: builder.query<IAuthor[], void>({
      query: () => '/authors',
    }),
    getLocations: builder.query<ILocation[], void>({
      query: () => '/locations',
    }),
  }),
});

export const { useGetPicturesQuery, useGetAuthorsQuery, useGetLocationsQuery } = api;
