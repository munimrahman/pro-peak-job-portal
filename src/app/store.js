/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import filterReducer from '../features/filter/filterSlice';
import quizReducer from '../features/quiz/quizSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filter: filterReducer,
        quiz: quizReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
