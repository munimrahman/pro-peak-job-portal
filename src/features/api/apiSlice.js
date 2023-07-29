/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1',
    }),
    tagTypes: ['Jobs'],
    endpoints: (builder) => ({}),
});

export default apiSlice;