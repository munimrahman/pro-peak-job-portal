import React from 'react';
import FilterOption from '../../JobList/AdvFilter/FilterOption';

function AdvFilterCompany() {
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
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Company Size</h3>
                <FilterOption name="All" vacancies={139} />
                <FilterOption name="0 - 10" vacancies={36} />
                <FilterOption name="10 - 50" vacancies={19} />
                <FilterOption name="50 - 100" vacancies={25} />
                <FilterOption name="100 - 200" vacancies={26} />
                <FilterOption name="200 - 500" vacancies={14} />
                <FilterOption name="500 - 1000" vacancies={48} />

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
        </>
    );
}

export default AdvFilterCompany;
