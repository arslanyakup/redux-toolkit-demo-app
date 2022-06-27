// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const boredApi = createApi({
  reducerPath: 'boredApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.boredapi.com/api/' }),
  endpoints: (builder) => ({
    getRandomActivity: builder.query({
      query: () => 'activity',
    }),
  }),
});

export const {
  useGetRandomActivityQuery
} = boredApi