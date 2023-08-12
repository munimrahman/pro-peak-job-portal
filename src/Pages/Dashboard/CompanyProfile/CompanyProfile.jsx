import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, ScrollRestoration } from 'react-router-dom';
import { useGetCompaniesQuery } from '../../../features/company/companyApi';

function CompanyProfile() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { data: { companies = [] } = {} } = {} } = useGetCompaniesQuery(
        `hiringManager=${_id}`
    );
    const companyInfo = companies[0];

    const { name, logo, coverPhoto, industry, location, foundedIn, website, phone, motto } =
        companyInfo || {};

    const activeClassName =
        'mx-2 md:mx-0 md:mr-2 py-2 shadow bg-primary text-white px-3 text-sm rounded';
    const inActiveClassName =
        'mx-2 md:mx-0 md:mr-2 py-2 shadow bg-info text-primary px-3 text-sm rounded';
    return (
        <div className="p-8">
            <h2 className="text-secondary text-3xl">Company Overview</h2>
            <ul className="flex mt-3">
                <li>
                    <NavLink
                        to="/recruiter-dashboard/company-profile/edit"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Update Company Info
                    </NavLink>
                </li>
            </ul>
            <div className="divider my-3" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Name:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{name}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Motto:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{motto || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Industry:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{industry || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Location:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{location || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Phone:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{phone || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Profile Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        {logo ? (
                            <figure>
                                <img
                                    src={logo || `https://placehold.co/300?text=Hello+World`}
                                    alt={`${name}_logo`}
                                    className="rounded-xl w-20 h-20"
                                />
                            </figure>
                        ) : (
                            '-'
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Cover Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        {coverPhoto ? (
                            <figure>
                                <img src={coverPhoto} alt="" className="rounded-xl w-2/" />
                            </figure>
                        ) : (
                            '-'
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Founded In:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{foundedIn || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Website:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{website || '-'}</p>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
}

export default CompanyProfile;
