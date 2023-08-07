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

        editCompany: builder.mutation({
            query: ({ id, data, hrId }) => ({
                url: `/companies/${id}`,
                method: 'PUT',
                body: data,
            }),

            async onQueryStarted({ id, data, hrId }, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    if (res.data._id) {
                        dispatch(
                            apiSlice.util.updateQueryData('getCompanies', hrId, (draft) => {
                                draft.data.companies[0] = res.data;
                            })
                        );
                    }
                } catch (error) {
                    console.log(error);
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
