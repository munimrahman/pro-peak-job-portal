/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    result: {
        testName: '',
        score: 0,
        correct: 0,
        wrong: 0,
    },
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        quizResult: (state, action) => {
            state.result = action.payload;
        },
        clearQuizResult: (state) => {
            state.result = {
                testName: '',
                score: 0,
                correct: 0,
                wrong: 0,
            };
        },
    },
});

export default quizSlice.reducer;

export const { quizResult, clearQuizResult } = quizSlice.actions;
