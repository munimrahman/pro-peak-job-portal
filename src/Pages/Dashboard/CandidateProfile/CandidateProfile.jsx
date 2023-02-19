/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import coverPhoto from '../../../assets/company-cover.png';
import profilePhoto from '../../../assets/company.png';
import ProfileHeader from './ProfileHeader';

function CandidateProfile() {
    return (
        <div className="p-8">
            <ProfileHeader title="Profile Overview" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Name:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">Sakib Al Hasan</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Position:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">MERN Stack Developer</p>
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

export default CandidateProfile;
