import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
// import CompanyDetailsSidebar from '../../CompanyDetails/CompanyInfoSideBar/CompanyInfoSideBar';
import { useGetUserQuery } from '../../../features/users/usersApi';
import useTitle from '../../../hooks/useTitle';
import LatestCompanyJobs from '../../CompanyDetails/LatestCompanyJobs/LatestCompanyJobs';
import CompanyInfo from '../../JobDetails/CompanyInfo/CompanyInfo';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import RecruiterDetailsHeader from '../RecruiterDetailsHeader/RecruiterDetailsHeader';

function RecruiterDetails() {
    const { id } = useParams();
    const { data: { user = {} } = {} } = useGetUserQuery(id);
    const { company, name } = user;
    useTitle(`${name} | Pro Peak`);
    return (
        <div className="max-w-[1115px] mx-auto">
            <RecruiterDetailsHeader user={user} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <LatestCompanyJobs hiringManagerId={id} />
                </div>
                <div className="col-span-4">
                    <CompanyInfo company={company} />
                    <WeHiring />
                </div>
            </div>
            <SubscribeBox />
            <ScrollRestoration />
        </div>
    );
}

export default RecruiterDetails;
