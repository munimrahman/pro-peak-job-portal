import React from 'react';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import CandidateDescription from '../CandidateDescription/CandidateDescription';
import CandidateDetailsHeader from '../CandidateDetailsHeader/CandidateDetailsHeader';
import CandidateDetailsSidebar from '../CandidateDetailsSidebar/CandidateDetailsSidebar';
import WorkExperience from '../WorkExperience/WorkExperience';

function CandidateDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <CandidateDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <CandidateDescription />
                    <WorkExperience />
                </div>
                <div className="col-span-4">
                    <CandidateDetailsSidebar />
                    <WeHiring />
                </div>
            </div>
            <SubscribeBox />
        </div>
    );
}

export default CandidateDetails;
