/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (a) => {
                console.log(a);
                return {
                    url: `/jobs?`,
                };
            },
        }),

        getSingleJob: builder.query({
            query: (id) => `/jobs/${id}`,
        }),

        // TODO: add Job
        addJob: builder.mutation({
            query: (data) => ({
                url: '/jobs',
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

        // TODO: edit Job
        editJob: builder.mutation({
            query: ({ id, data }) => ({
                url: `/jobs/${id}`,
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

        // TODO: delete Job
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: 'DELETE',
            }),

            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getCustomers', undefined, (draft) => {
                        const deletedTaskIndex = draft.data.customers.findIndex((v) => v._id == id);
                        draft.data.customers.splice(deletedTaskIndex, 1);
                    })
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const {
    useGetJobsQuery,
    useGetSingleJobQuery,
    useAddJobMutation,
    useEditJobMutation,
    useDeleteJobMutation,
} = customersApi;
