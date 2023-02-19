import React from 'react';
import { NavLink } from 'react-router-dom';
import coverPhoto from '../../../assets/company-cover.png';
import profilePhoto from '../../../assets/company.png';

function CompanyProfile() {
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
                        <p className="text-accent">Tamim Iqbal</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Position:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">Human Resource Manager</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Location:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Profile Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <figure>
                            <img src={profilePhoto} alt="" className="rounded-xl" />
                        </figure>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Cover Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <figure>
                            <img src={coverPhoto} alt="" className="rounded-xl w-2/" />
                        </figure>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Bio:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">
                            The AliStudio Design team has a vision to establish a trusted platform
                            that enables productive and healthy enterprises in a world of digital
                            and remote everything, constantly changing work patterns and norms, and
                            the need for organizational resiliency.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Experience:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">2 Years</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Hourly Rate:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">$25</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Website:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">http://localhost:3000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfile;
