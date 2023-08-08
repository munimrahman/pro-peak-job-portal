/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const jobPostApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (query) => ({
                url: `/jobs`,
                params: query,
            }),
        }),

        getSingleJob: builder.query({
            query: (id) => `/jobs/${id}`,
        }),

        addJob: builder.mutation({
            query: ({ id, data }) => ({
                url: '/jobs',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    if (res.data._id) {
                        dispatch(
                            apiSlice.util.updateQueryData('getJobs', id, (draft) => {
                                draft.data.jobs.push(res.data);
                            })
                        );
                    }
                } catch (err) {
                    //
                }
            },
        }),

        editJob: builder.mutation({
            query: ({ id, data }) => ({
                url: `/jobs/${id}`,
                method: 'PUT',
                body: data,
            }),

            async onQueryStarted({ id, data, hrId }, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    if (res.data._id) {
                        dispatch(
                            apiSlice.util.updateQueryData('getJobs', hrId, (draft) => {
                                const updateIndex = draft.data.jobs.findIndex((v) => v._id == id);
                                draft.data.jobs[updateIndex] = res.data;
                            })
                        );
                    }
                } catch (error) {
                    //
                }
            },
        }),

        deleteJob: builder.mutation({
            query: ({ id, queryId }) => ({
                url: `/jobs/${id}`,
                method: 'DELETE',
            }),

            async onQueryStarted({ id, queryId }, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getJobs', queryId, (draft) => {
                        const deletedTaskIndex = draft.data.jobs.findIndex((v) => v._id == id);
                        draft.data.jobs.splice(deletedTaskIndex, 1);
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
} = jobPostApi;
