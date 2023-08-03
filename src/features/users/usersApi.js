/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (query) => ({
                url: `/users`,
                params: query,
            }),
        }),

        getSingleUser: builder.query({
            query: (id) => `/users/${id}`,
        }),

        // TODO: add user
        addUser: builder.mutation({
            query: (data) => ({
                url: '/companies',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                const res = await queryFulfilled;

                if (res.data.data._id) {
                    dispatch(
                        apiSlice.util.updateQueryData('getCustomers', undefined, (draft) => {
                            draft.data.customers.push(res.data.data);
                        })
                    );
                }
            },
        }),

        // TODO: edit user
        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/companies/${id}`,
                method: 'PUT',
                body: data,
            }),

            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                const res = await queryFulfilled;

                if (res.data.data._id) {
                    dispatch(
                        apiSlice.util.updateQueryData('getCustomers', undefined, (draft) => {
                            const updateIndex = draft.data.customers.findIndex((v) => v._id == id);
                            draft.data.customers[updateIndex] = res.data.data;
                        })
                    );
                }
            },
        }),
    }),
});

export const { useGetUsersQuery, useGetSingleUserQuery, useAddUserMutation, useEditUserMutation } =
    usersApi;
