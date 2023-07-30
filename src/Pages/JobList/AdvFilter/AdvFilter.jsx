/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import {
    jobFilterByIndustry,
    jobFilterByJobLevel,
    jobFilterByJobType,
    jobFilterByPostDate,
    jobFilterBySalary,
    jobFilterByWorkPlace,
} from '../../../features/filter/filterSlice';
import FilterOption from './FilterOption';

function AdvFilter() {
    const {
        industryFilter,
        salaryFilter,
        jobLevelFilter,
        workPlaceFilter,
        postDateFilter,
        jobTypeFilter,
    } = useSelector((state) => state.filter.jobs);

    return (
        <>
            {/* Industry */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Industry</h3>
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Web Development"
                    isChecked={industryFilter.includes('Web Development')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Software Development"
                    isChecked={industryFilter.includes('Software Development')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="App Development"
                    isChecked={industryFilter.includes('App Development')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Game Development"
                    isChecked={industryFilter.includes('Game Development')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="UI/UX Design"
                    isChecked={industryFilter.includes('UI/UX Design')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Graphic Design"
                    isChecked={industryFilter.includes('Graphic Design')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Finance"
                    isChecked={industryFilter.includes('Finance')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Human Resource"
                    isChecked={industryFilter.includes('Human Resource')}
                />
                <FilterOption
                    action={jobFilterByIndustry}
                    name="Marketing & Sales"
                    isChecked={industryFilter.includes('Marketing & Sales')}
                />

                <div className="border-b pt-2" />
            </div>
            {/* Salary */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Salary Range</h3>
                <FilterOption
                    action={jobFilterBySalary}
                    value="100-500"
                    name="$100 - $500"
                    isChecked={salaryFilter.includes('100-500')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="501-1000"
                    name="$501 - $1000"
                    isChecked={salaryFilter.includes('501-1000')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="1001-1500"
                    name="$1001 - $1500"
                    isChecked={salaryFilter.includes('1001-1500')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="1501-2000"
                    name="$1501 - $2000"
                    isChecked={salaryFilter.includes('1501-2000')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="2001-2500"
                    name="$2001 - $2500"
                    isChecked={salaryFilter.includes('2001-2500')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="2501-3000"
                    name="$2501 - $3000"
                    isChecked={salaryFilter.includes('2501-3000')}
                />
                <FilterOption
                    action={jobFilterBySalary}
                    value="3001-Infinity"
                    name="$3001 & Above"
                    isChecked={salaryFilter.includes('3001-Infinity')}
                />
                <div className="border-b pt-2" />
            </div>
            {/* Job Level */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Job Level</h3>
                <FilterOption
                    action={jobFilterByJobLevel}
                    name="Intern Level"
                    isChecked={jobLevelFilter.includes('Intern Level')}
                />
                <FilterOption
                    action={jobFilterByJobLevel}
                    name="Entry Level"
                    isChecked={jobLevelFilter.includes('Entry Level')}
                />
                <FilterOption
                    action={jobFilterByJobLevel}
                    name="Junior Level"
                    isChecked={jobLevelFilter.includes('Junior Level')}
                />
                <FilterOption
                    action={jobFilterByJobLevel}
                    name="Mid Level"
                    isChecked={jobLevelFilter.includes('Mid Level')}
                />
                <FilterOption
                    action={jobFilterByJobLevel}
                    name="Senior Level"
                    isChecked={jobLevelFilter.includes('Senior Level')}
                />
                <div className="border-b pt-2" />
            </div>
            {/* Work Place */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Work Place</h3>
                <FilterOption
                    action={jobFilterByWorkPlace}
                    name="Remote"
                    isChecked={workPlaceFilter.includes('Remote')}
                />
                <FilterOption
                    action={jobFilterByWorkPlace}
                    name="Hybrid"
                    isChecked={workPlaceFilter.includes('Hybrid')}
                />
                <FilterOption
                    action={jobFilterByWorkPlace}
                    name="On Site"
                    isChecked={workPlaceFilter.includes('On Site')}
                />
                <div className="border-b pt-2" />
            </div>
            {/* Post Date */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Latest Job Posted</h3>
                <FilterOption
                    action={jobFilterByPostDate}
                    value={1}
                    name="1 Day"
                    isChecked={postDateFilter.includes(1)}
                />
                <FilterOption
                    action={jobFilterByPostDate}
                    value={7}
                    name="7 Days"
                    isChecked={postDateFilter.includes(7)}
                />
                <FilterOption
                    action={jobFilterByPostDate}
                    value={15}
                    name="15 Days"
                    isChecked={postDateFilter.includes(15)}
                />
                <FilterOption
                    action={jobFilterByPostDate}
                    value={30}
                    name="30 Days"
                    isChecked={postDateFilter.includes(30)}
                />
                <div className="border-b pt-2" />
            </div>
            {/* Job Type  */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Job Type</h3>
                <FilterOption
                    action={jobFilterByJobType}
                    name="Full Time"
                    isChecked={jobTypeFilter.includes('Full Time')}
                />
                <FilterOption
                    action={jobFilterByJobType}
                    name="Part Time"
                    isChecked={jobTypeFilter.includes('Part Time')}
                />
                <FilterOption
                    action={jobFilterByJobType}
                    name="Freelance"
                    isChecked={jobTypeFilter.includes('Freelance')}
                />
                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilter;
