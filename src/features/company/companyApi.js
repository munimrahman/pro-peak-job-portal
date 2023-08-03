/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';

export const companyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: (query) => ({
                url: `/companies`,
                params: query,
            }),
        }),

        getSingleCompany: builder.query({
            query: (id) => `/companies/${id}`,
        }),

        // TODO: add Company
        addCOmpany: builder.mutation({
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

        // TODO: edit company
        editCompany: builder.mutation({
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

export const {
    useGetCompaniesQuery,
    useGetSingleCompanyQuery,
    useAddCOmpanyMutation,
    useEditCompanyMutation,
} = companyApi;
