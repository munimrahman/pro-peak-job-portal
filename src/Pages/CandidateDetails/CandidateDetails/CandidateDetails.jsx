/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import LoadingSpinner from '../../../Components/LoadingElements/LoadingSpinner';
import { useGetUserQuery } from '../../../features/users/usersApi';
import useTitle from '../../../hooks/useTitle';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import CandidateDescription from '../CandidateDescription/CandidateDescription';
import CandidateDetailsHeader from '../CandidateDetailsHeader/CandidateDetailsHeader';
import CandidateDetailsSidebar from '../CandidateDetailsSidebar/CandidateDetailsSidebar';
import WorkExperience from '../WorkExperience/WorkExperience';

function CandidateDetails() {
    const { id } = useParams();
    const { data: { user = {} } = {}, isLoading } = useGetUserQuery(id);
    const { name } = user;
    useTitle(`${name || 'Candidate Details'} | Pro Peak`);
    return (
        <>
            {isLoading ? (
                <div className="h-screen">
                    <LoadingSpinner />
                </div>
            ) : (
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
            )}
        </>
    );
}

export default CandidateDetails;
