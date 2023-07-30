/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // jobs: {
    industryFilter: [],
    salaryFilter: [],
    jobLevel: [],
    workPlace: [],
    postDate: [],
    jobType: [],
    // },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        jobFilterByIndustry: (state, action) => {
            const { name, check } = action.payload;
            const { industryFilter } = state;

            if (check && !industryFilter.includes(name)) {
                industryFilter.push(name);
            } else if (!check && industryFilter.includes(name)) {
                const index = industryFilter.indexOf(name);
                industryFilter.splice(index, 1);
            }
        },
        jobFilterBySalary: (state, action) => {
            state.jobs.salaryFilter = action.payload;
        },
        jobFilterByJobLevel: (state, action) => {
            state.jobs.jobLevel = action.payload;
        },
        jobFilterByWorkPlace: (state, action) => {
            state.jobs.workPlace = action.payload;
        },
        jobFilterByPostDate: (state, action) => {
            state.jobs.postDate = action.payload;
        },
        jobFilterByJobType: (state, action) => {
            state.jobs.jobType = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const {
    jobFilterByIndustry,
    jobFilterBySalary,
    jobFilterByJobLevel,
    jobFilterByWorkPlace,
    jobFilterByPostDate,
    jobFilterByJobType,
} = filterSlice.actions;
