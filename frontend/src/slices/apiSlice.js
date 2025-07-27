import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      // Don't set Content-Type for FormData (file uploads)
      if (!(getState()?.currentRequest?.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    }
  }),
  tagTypes: ['User', 'Product', 'Order'],
  endpoints: builder => ({})
});
                                                              