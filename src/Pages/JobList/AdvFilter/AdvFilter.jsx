/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
    return (
        <>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Industry</h3>
                <FilterOption action={jobFilterByIndustry} name="Web Development" />
                <FilterOption action={jobFilterByIndustry} name="Software Development" />
                <FilterOption action={jobFilterByIndustry} name="App Development" />
                <FilterOption action={jobFilterByIndustry} name="Game Development" />
                <FilterOption action={jobFilterByIndustry} name="UI/UX Design" />
                <FilterOption action={jobFilterByIndustry} name="Graphic Design" />
                <FilterOption action={jobFilterByIndustry} name="Finance" />
                <FilterOption action={jobFilterByIndustry} name="Human Resource" />
                <FilterOption action={jobFilterByIndustry} name="Marketing & Sales" />

                <div className="border-b pt-2" />
            </div>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Salary Range</h3>
                <FilterOption action={jobFilterBySalary} name="$100 - $500" />
                <FilterOption action={jobFilterBySalary} name="$501 - $1000" />
                <FilterOption action={jobFilterBySalary} name="$1001 - $1500" />
                <FilterOption action={jobFilterBySalary} name="$1501 - $2000" />
                <FilterOption action={jobFilterBySalary} name="$2001 - $2500" />
                <FilterOption action={jobFilterBySalary} name="$2501 - $3000" />
                <FilterOption action={jobFilterBySalary} name="$3001 & Above" />
                <div className="border-b pt-2" />
            </div>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Salary Range</h3>
                <FilterOption action={jobFilterByJobLevel} name="Intern Level" />
                <FilterOption action={jobFilterByJobLevel} name="Entry Level" />
                <FilterOption action={jobFilterByJobLevel} name="Junior Level" />
                <FilterOption action={jobFilterByJobLevel} name="Mid Level" />
                <FilterOption action={jobFilterByJobLevel} name="Senior Level" />
                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Work Place</h3>
                <FilterOption action={jobFilterByWorkPlace} name="Remote" />
                <FilterOption action={jobFilterByWorkPlace} name="Hybrid" />
                <FilterOption action={jobFilterByWorkPlace} name="On Site" />
                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Latest Job Posted</h3>
                <FilterOption action={jobFilterByPostDate} name="1 Day" />
                <FilterOption action={jobFilterByPostDate} name="7 Days" />
                <FilterOption action={jobFilterByPostDate} name="15 Days" />
                <FilterOption action={jobFilterByPostDate} name="30 Days" />
                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Job Type</h3>
                <FilterOption action={jobFilterByJobType} name="Full Time" />
                <FilterOption action={jobFilterByJobType} name="Part Time" />
                <FilterOption action={jobFilterByJobType} name="Freelance" />
                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilter;
