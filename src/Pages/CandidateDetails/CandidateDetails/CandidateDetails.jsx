import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import { useGetSingleUserQuery } from '../../../features/users/usersApi';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import CandidateDescription from '../CandidateDescription/CandidateDescription';
import CandidateDetailsHeader from '../CandidateDetailsHeader/CandidateDetailsHeader';
import CandidateDetailsSidebar from '../CandidateDetailsSidebar/CandidateDetailsSidebar';
import WorkExperience from '../WorkExperience/WorkExperience';

function CandidateDetails() {
    const { id } = useParams();
    const { data: { user = {} } = {} } = useGetSingleUserQuery(id);

    return (
        <div className="max-w-[1115px] mx-auto">
            <CandidateDetailsHeader user={user} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <CandidateDescription user={user} />
                    <WorkExperience user={user} />
                </div>
                <div className="col-span-4">
                    <CandidateDetailsSidebar user={user} />
                    <WeHiring />
                </div>
            </div>
            <SubscribeBox />
            <ScrollRestoration />
        </div>
    );
}

export default CandidateDetails;
