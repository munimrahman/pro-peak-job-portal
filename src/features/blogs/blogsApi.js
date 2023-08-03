/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const blogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: (query) => ({
                url: `/blogs`,
                params: query,
            }),
        }),

        getSingleBlog: builder.query({
            query: (id) => `/blogs/${id}`,
        }),

        // TODO: add Blog
        addBlog: builder.mutation({
            query: (data) => ({
                url: '/blogs',
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

        // TODO: edit Blog
        editBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `/blogs/${id}`,
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
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
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
    useGetBlogsQuery,
    useGetSingleBlogQuery,
    useAddBlogMutation,
    useEditBlogMutation,
    useDeleteBlogMutation,
} = blogsApi;
