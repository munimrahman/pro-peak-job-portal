/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://dull-tweed-jacket-mite.cyclic.app/api/v1',
        baseUrl: 'http://localhost:5000/api/v1',
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});

export default apiSlice;
