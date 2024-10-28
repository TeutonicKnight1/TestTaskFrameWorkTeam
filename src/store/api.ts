import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPainting } from '../models/IPainting';

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
  }),
});

export const { useGetPicturesQuery } = api;
