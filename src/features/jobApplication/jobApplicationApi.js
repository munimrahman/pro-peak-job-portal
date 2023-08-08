/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const jobPostApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobApplications: builder.query({
            query: (query) => ({
                url: `/job-applications`,
                params: query,
            }),
        }),

        getSingleJobApplication: builder.query({
            query: (id) => `/job-applications/${id}`,
        }),

        applyJob: builder.mutation({
            query: ({ id, data }) => ({
                url: '/job-applications',
                method: 'POST',
                body: data,
            }),
        }),

        deleteJobApplication: builder.mutation({
            query: ({ id, queryId }) => ({
                url: `/job-applications/${id}`,
                method: 'DELETE',
            }),

            async onQueryStarted({ id, queryId }, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getJobApplications', queryId, (draft) => {
                        const deletedTaskIndex = draft.data.applications.findIndex(
                            (v) => v._id == id
                        );
                        draft.data.applications.splice(deletedTaskIndex, 1);
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
    useGetJobApplicationsQuery,
    useGetSingleJobApplicationQuery,
    useApplyJobMutation,
    useDeleteJobApplicationMutation,
} = jobPostApi;
