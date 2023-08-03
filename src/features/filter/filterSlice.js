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
    company: {
        industryFilter: [],
        companySizeFilter: [],
        workPlaceFilter: [],
        companySearch: '',
    },
    candidate: {
        skillFilter: [],
        hourlyRateFilter: [],
        certificationFilter: [],
        candidateSearch: '',
    },
    blog: {
        tagFilter: '',
        authorFilter: '',
        blogSearch: '',
    },
    quiz: {
        quizSearchText: '',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // job filter
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
        // company filter
        companyFilterByIndustry: (state, action) => {
            const { value, check } = action.payload;
            const {
                company: { industryFilter },
            } = state;

            if (check && !industryFilter.includes(value)) {
                industryFilter.push(value);
            } else if (!check && industryFilter.includes(value)) {
                const index = industryFilter.indexOf(value);
                industryFilter.splice(index, 1);
            }
        },
        companyFilterBySize: (state, action) => {
            const { value, check } = action.payload;
            const {
                company: { companySizeFilter },
            } = state;

            if (check && !companySizeFilter.includes(value)) {
                companySizeFilter.push(value);
            } else if (!check && companySizeFilter.includes(value)) {
                const index = companySizeFilter.indexOf(value);
                companySizeFilter.splice(index, 1);
            }
        },
        companyFilterByWorkPlace: (state, action) => {
            const { value, check } = action.payload;
            const {
                company: { workPlaceFilter },
            } = state;

            if (check && !workPlaceFilter.includes(value)) {
                workPlaceFilter.push(value);
            } else if (!check && workPlaceFilter.includes(value)) {
                const index = workPlaceFilter.indexOf(value);
                workPlaceFilter.splice(index, 1);
            }
        },
        companySearch: (state, action) => {
            const { company } = state;
            const searchText = action.payload;
            company.companySearch = searchText;
        },
        // candidate filter
        candidateFilterBySkills: (state, action) => {
            const { value, check } = action.payload;
            const {
                candidate: { skillFilter },
            } = state;

            if (check && !skillFilter.includes(value)) {
                skillFilter.push(value);
            } else if (!check && skillFilter.includes(value)) {
                const index = skillFilter.indexOf(value);
                skillFilter.splice(index, 1);
            }
        },
        candidateFilterByHourlyRate: (state, action) => {
            const { value, check } = action.payload;
            const {
                candidate: { hourlyRateFilter },
            } = state;

            if (check && !hourlyRateFilter.includes(value)) {
                hourlyRateFilter.push(value);
            } else if (!check && hourlyRateFilter.includes(value)) {
                const index = hourlyRateFilter.indexOf(value);
                hourlyRateFilter.splice(index, 1);
            }
        },
        candidateFilterByCertification: (state, action) => {
            const { value, check } = action.payload;
            const {
                candidate: { certificationFilter },
            } = state;

            if (check && !certificationFilter.includes(value)) {
                certificationFilter.push(value);
            } else if (!check && certificationFilter.includes(value)) {
                const index = certificationFilter.indexOf(value);
                certificationFilter.splice(index, 1);
            }
        },
        candidateSearch: (state, action) => {
            const { candidate } = state;
            const searchText = action.payload;
            candidate.candidateSearch = searchText;
        },
        // blog filter
        blogFilterByTag: (state, action) => {
            const tag = action.payload;
            const { blog } = state;
            blog.tagFilter = tag;
        },
        blogFilterByAuthor: (state, action) => {
            const authorId = action.payload;
            state.blog.authorFilter = authorId;
        },
        blogSearch: (state, action) => {
            const { blog } = state;
            const searchText = action.payload;
            blog.blogSearch = searchText;
        },
        // skill
        quizSearch: (state, action) => {
            const { quiz } = state;
            const searchText = action.payload;
            quiz.quizSearchText = searchText;
        },
        // common filter
        clearSearch: (state) => {
            state.jobs.jobSearch = {
                industry: '',
                location: '',
                searchText: '',
            };
            state.company.companySearch = '';
            state.candidate.candidateSearch = '';
            state.blog.blogSearch = '';
            state.quiz.quizSearchText = '';
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
            state.company = {
                industryFilter: [],
                companySizeFilter: [],
                workPlaceFilter: [],
                companySearch: '',
            };
            state.candidate = {
                skillFilter: [],
                hourlyRateFilter: [],
                certificationFilter: [],
                candidateSearch: '',
            };
            state.blog = {
                tagFilter: '',
                authorFilter: '',
                blogSearch: '',
            };
            state.quiz = {
                quizSearchText: '',
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
    jobSearch,
    companyFilterByIndustry,
    companyFilterBySize,
    companyFilterByWorkPlace,
    companySearch,
    candidateFilterBySkills,
    candidateFilterByHourlyRate,
    candidateFilterByCertification,
    candidateSearch,
    blogFilterByTag,
    blogFilterByAuthor,
    blogSearch,
    quizSearch,
    clearSearch,
    resetFilter,
} = filterSlice.actions;
