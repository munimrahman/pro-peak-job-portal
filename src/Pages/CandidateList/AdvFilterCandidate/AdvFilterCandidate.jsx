import React from 'react';
import {
    candidateFilterByCertification,
    candidateFilterByHourlyRate,
    candidateFilterBySkills,
} from '../../../features/filter/filterSlice';
import FilterOption from '../../JobList/AdvFilter/FilterOption';

function AdvFilterCandidate() {
    return (
        <>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Skills</h3>

                <FilterOption action={candidateFilterBySkills} name="JavaScript" />
                <FilterOption action={candidateFilterBySkills} name="Python" />
                <FilterOption action={candidateFilterBySkills} name="PHP" />
                <FilterOption action={candidateFilterBySkills} name="Node Js" />
                <FilterOption action={candidateFilterBySkills} name="C#" />
                <FilterOption action={candidateFilterBySkills} name="React Js" />
                <FilterOption action={candidateFilterBySkills} name="MS Office" />

                <div className="border-b pt-2" />
            </div>
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Hourly Rate</h3>

                <FilterOption action={candidateFilterByHourlyRate} value="0-5" name="$0 - $5" />
                <FilterOption action={candidateFilterByHourlyRate} value="5-10" name="$5 - $10" />
                <FilterOption action={candidateFilterByHourlyRate} value="10-20" name="$10 - $20" />
                <FilterOption action={candidateFilterByHourlyRate} value="20-30" name="$20 - $30" />
                <FilterOption action={candidateFilterByHourlyRate} value="30-50" name="$30 - $50" />
                <FilterOption
                    action={candidateFilterByHourlyRate}
                    value="50-100"
                    name="$50 - $100"
                />

                <div className="border-b pt-2" />
            </div>

            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Exam</h3>

                <FilterOption
                    action={candidateFilterByCertification}
                    value="English"
                    name="English Test"
                />
                <FilterOption
                    action={candidateFilterByCertification}
                    value="JavaScript"
                    name="JavaScript Test"
                />
                <FilterOption action={candidateFilterByCertification} value="PHP" name="PHP Test" />

                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilterCandidate;
