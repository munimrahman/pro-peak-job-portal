/* eslint-disable eqeqeq */
import apiSlice from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        })
                    );
                } catch (error) {
                    //
                }
            },
        }),

        logIn: builder.mutation({
            query: (data) => ({
                url: '/log-in',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: res } = await queryFulfilled;

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: res.data.accessToken,
                            user: res.data.user,
                        })
                    );
                } catch (error) {
                    //
                }
            },
        }),
    }),
});

export const { useLogInMutation, useRegisterMutation } = authApi;
