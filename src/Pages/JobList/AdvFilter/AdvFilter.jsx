/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FilterOption from './FilterOption';

function AdvFilter() {
    return (
        <>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Industry</h3>
                <FilterOption name="All" vacancies={180} />
                <FilterOption name="Web Developer" vacancies={12} />
                <FilterOption name="UI/UX Designer" vacancies={15} />
                <FilterOption name="App Developer" vacancies={11} />
                <FilterOption name="Finance" vacancies={54} />
                <FilterOption name="Management" vacancies={65} />
                <FilterOption name="Advertising" vacancies={94} />
                <FilterOption name="Human Resource" vacancies={6} />

                <div className="border-b pt-2" />
            </div>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Salary Range</h3>
                <FilterOption name="All" vacancies={139} />
                <FilterOption name="$0k - $20k" vacancies={36} />
                <FilterOption name="$20k - $30k" vacancies={19} />
                <FilterOption name="$30k - $40k" vacancies={25} />
                <FilterOption name="$40k - $50k" vacancies={26} />
                <FilterOption name="$50k - $60k" vacancies={14} />
                <FilterOption name="$60k - $70k" vacancies={48} />
                <FilterOption name="$70k - $100k" vacancies={14} />

                <div className="border-b pt-2" />
            </div>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Salary Range</h3>
                <FilterOption name="All" vacancies={154} />
                <FilterOption name="Senior" vacancies={12} />
                <FilterOption name="Junior" vacancies={15} />
                <FilterOption name="Fresher" vacancies={11} />
                <FilterOption name="Intern" vacancies={54} />

                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Work Place</h3>
                <FilterOption name="All" vacancies={124} />
                <FilterOption name="Remote" vacancies={65} />
                <FilterOption name="On Site" vacancies={48} />
                <FilterOption name="Hybrid" vacancies={35} />

                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Job Posted</h3>
                <FilterOption name="All" vacancies={125} />
                <FilterOption name="1 Day" vacancies={48} />
                <FilterOption name="7 Days" vacancies={64} />
                <FilterOption name="30 Days" vacancies={18} />

                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Job Type</h3>
                <FilterOption name="All" vacancies={154} />
                <FilterOption name="Full Time" vacancies={18} />
                <FilterOption name="Part Time" vacancies={34} />
                <FilterOption name="Freelancer" vacancies={71} />

                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilter;
