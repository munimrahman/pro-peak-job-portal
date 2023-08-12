/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import coverPhotoDemo from '../../../assets/company-cover.png';
import profilePhotoDemo from '../../../assets/company.png';
import { useGetUserQuery } from '../../../features/users/usersApi';
import ProfileHeader from './ProfileHeader';

function CandidateProfile() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const {
        data: {
            user: {
                name,
                designation,
                address,
                profilePhoto,
                coverPhoto,
                bio,
                experience,
                hourlyRate,
                website,
            } = {},
        } = {},
    } = useGetUserQuery(_id);

    return (
        <div className="p-8">
            <ProfileHeader title="Profile Overview" />
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
                        <h4 className="font-bold text-secondary">Position:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{designation || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Location:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{address || '-'}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Profile Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <figure>
                            <img
                                src={profilePhoto || profilePhotoDemo}
                                alt=""
                                className="rounded-xl w-20 h-20"
                            />
                        </figure>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Cover Photo:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <figure>
                            <img src={coverPhoto || coverPhotoDemo} alt="" className="rounded-xl" />
                        </figure>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Bio:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{bio}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Experience:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">{experience || '-'} Years</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-secondary">Hourly Rate:</h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-accent">${hourlyRate || ' -'}</p>
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

export default CandidateProfile;
