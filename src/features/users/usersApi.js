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

        // TODO: delete
        getAssignments: builder.query({
            query: () => '/assignments',
        }),

        getAssignment: builder.query({
            query: (id) => `/assignments/${id}`,
        }),

        editAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: 'PATCH',
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                const res = await queryFulfilled;
                if (res?.data?.id) {
                    dispatch(
                        apiSlice.util.updateQueryData('getAssignments', undefined, (draft) => {
                            console.log(draft);
                            const updateIndex = draft.findIndex((v) => v.id == id);
                            draft[updateIndex] = res.data;
                        })
                    );
                    dispatch(
                        apiSlice.util.updateQueryData('getAssignment', id, (draft) => res.data)
                    );
                }
            },
        }),
        // TODO: delete

        // TODO: add user
        addUser: builder.mutation({
            query: (data) => ({
                url: '/users',
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
                url: `/users/${id}`,
                method: 'PUT',
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    if (size(res)) {
                        console.log(res);
                        dispatch(
                            apiSlice.util.updateQueryData('getUser', id, (draft) => {
                                Object.assign(draft, { ...res, user: res.data });
                            })
                        );
                    }
                } catch (error) {}
            },
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddUserMutation,
    useEditUserMutation,
    useGetAssignmentQuery,
    useGetAssignmentsQuery,
    useEditAssignmentMutation,
} = usersApi;
