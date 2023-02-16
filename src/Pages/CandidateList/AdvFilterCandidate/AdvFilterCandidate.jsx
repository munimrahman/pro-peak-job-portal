import React from 'react';
import FilterOption from '../../JobList/AdvFilter/FilterOption';

function AdvFilterCandidate() {
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
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Hourly Rate</h3>
                <FilterOption name="All" vacancies={139} />
                <FilterOption name="$0 - $5" vacancies={36} />
                <FilterOption name="$5 - $10" vacancies={19} />
                <FilterOption name="$10 - $20" vacancies={25} />
                <FilterOption name="$20 - $30" vacancies={26} />
                <FilterOption name="$30 - $50" vacancies={14} />
                <FilterOption name="$50 - $100" vacancies={48} />

                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Exam</h3>
                <FilterOption name="All" vacancies={124} />
                <FilterOption name="English Test" vacancies={65} />
                <FilterOption name="JavaScript Test" vacancies={48} />
                <FilterOption name="PHP Test" vacancies={35} />

                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilterCandidate;
