/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import LoadingSpinner from '../../../Components/LoadingElements/LoadingSpinner';
import { useGetSingleCompanyQuery } from '../../../features/company/companyApi';
import useTitle from '../../../hooks/useTitle';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import CompanyDescription from '../CompanyDescription/CompanyDescription';
import CompanyDetailsHeader from '../CompanyDetailsHeader/CompanyDetailsHeader';
import CompanyInfoSideBar from '../CompanyInfoSideBar/CompanyInfoSideBar';
import LatestCompanyJobs from '../LatestCompanyJobs/LatestCompanyJobs';

function CompanyDetails() {
    const { id } = useParams();
    const { data: { company = {} } = {}, isLoading } = useGetSingleCompanyQuery(id);
    const { name } = company;
    useTitle(`${name || 'Company Details'} | Pro Peak`);
    return (
        <>
            {isLoading ? (
                <div className="h-screen">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="max-w-[1115px] mx-auto">
                    <CompanyDetailsHeader company={company} />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                        <div className="col-span-8">
                            <CompanyDescription company={company} />
                            <LatestCompanyJobs companyId={company._id} />
                        </div>
                        <div className="col-span-4">
                            <CompanyInfoSideBar company={company} />
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

export default CompanyDetails;
