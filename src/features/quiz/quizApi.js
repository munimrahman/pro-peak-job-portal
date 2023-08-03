/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzes: builder.query({
            query: (query) => ({
                url: `/quizzes`,
                params: query,
            }),
        }),

        getSingleQuiz: builder.query({
            query: (id) => `/quizzes/${id}`,
        }),

        // TODO: add Quiz
        addQuiz: builder.mutation({
            query: (data) => ({
                url: '/quizzes',
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

        // TODO: edit quiz
        editQuiz: builder.mutation({
            query: ({ id, data }) => ({
                url: `/quizzes/${id}`,
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

        // TODO: delete quiz
        deleteQuiz: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
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
    useGetQuizzesQuery,
    useGetSingleQuizQuery,
    useAddQuizMutation,
    useEditQuizMutation,
    useDeleteQuizMutation,
} = quizApi;
