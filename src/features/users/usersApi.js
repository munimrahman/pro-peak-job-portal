/* eslint-disable no-empty */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { size } from 'lodash';
import apiSlice from '../api/apiSlice';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (query) => ({
                url: `/users`,
                params: query,
            }),
        }),

        getUser: builder.query({
            query: (id) => `/users/${id}`,
        }),

        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;
                    console.log(res);
                    if (size(res)) {
                        console.log(res);
                        dispatch(
                            apiSlice.util.updateQueryData('getUser', id, (draft) => {
                                Object.assign(draft, { user: res.data });
                            })
                        );
                    }
                } catch (error) {}
            },
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery, useAddUserMutation, useEditUserMutation } =
    usersApi;
