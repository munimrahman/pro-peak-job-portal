/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: {
        industryFilter: [],
        salaryFilter: [],
        jobLevelFilter: [],
        workPlaceFilter: [],
        postDateFilter: [],
        jobTypeFilter: [],
        jobSearch: {
            industry: '',
            location: '',
            searchText: '',
        },
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        jobFilterByIndustry: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { industryFilter },
            } = state;

            if (check && !industryFilter.includes(value)) {
                industryFilter.push(value);
            } else if (!check && industryFilter.includes(value)) {
                const index = industryFilter.indexOf(value);
                industryFilter.splice(index, 1);
            }
        },

        jobFilterBySalary: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { salaryFilter },
            } = state;

            if (check && !salaryFilter.includes(value)) {
                salaryFilter.push(value);
            } else if (!check && salaryFilter.includes(value)) {
                const index = salaryFilter.indexOf(value);
                salaryFilter.splice(index, 1);
            }
        },

        jobFilterByJobLevel: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { jobLevelFilter },
            } = state;

            if (check && !jobLevelFilter.includes(value)) {
                jobLevelFilter.push(value);
            } else if (!check && jobLevelFilter.includes(value)) {
                const index = jobLevelFilter.indexOf(value);
                jobLevelFilter.splice(index, 1);
            }
        },

        jobFilterByWorkPlace: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { workPlaceFilter },
            } = state;

            if (check && !workPlaceFilter.includes(value)) {
                workPlaceFilter.push(value);
            } else if (!check && workPlaceFilter.includes(value)) {
                const index = workPlaceFilter.indexOf(value);
                workPlaceFilter.splice(index, 1);
            }
        },

        jobFilterByPostDate: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { postDateFilter },
            } = state;

            if (check && !postDateFilter.includes(value)) {
                postDateFilter.push(value);
            } else if (!check && postDateFilter.includes(value)) {
                const index = postDateFilter.indexOf(value);
                postDateFilter.splice(index, 1);
            }
        },

        jobFilterByJobType: (state, action) => {
            const { value, check } = action.payload;
            const {
                jobs: { jobTypeFilter },
            } = state;

            if (check && !jobTypeFilter.includes(value)) {
                jobTypeFilter.push(value);
            } else if (!check && jobTypeFilter.includes(value)) {
                const index = jobTypeFilter.indexOf(value);
                jobTypeFilter.splice(index, 1);
            }
        },
        jobSearch: (state, action) => {
            const {
                jobs: { jobSearch },
            } = state;
            const { industry, location, searchText } = action.payload;
            jobSearch.industry = industry;
            jobSearch.location = location;
            jobSearch.searchText = searchText;
        },
        clearSearch: (state) => {
            state.jobs.jobSearch = {
                industry: '',
                location: '',
                searchText: '',
            };
        },
        resetFilter: (state) => {
            state.jobs = {
                ...state.jobs,
                industryFilter: [],
                salaryFilter: [],
                jobLevelFilter: [],
                workPlaceFilter: [],
                postDateFilter: [],
                jobTypeFilter: [],
            };
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
    resetFilter,
    jobSearch,
    clearSearch,
} = filterSlice.actions;
