/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useEditUserMutation, useGetUserQuery } from '../../../features/users/usersApi';
import RecruiterProfileHeader from './RecruiterProfileHeader';

const initialState = {
    name: '',
    mobile: '',
    profilePhoto: '',
    coverPhoto: '',
    bio: '',
    designation: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    github: '',
    address: '',
};

function EditRecruiterProfile() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { user = {} } = {} } = useGetUserQuery(_id);
    const [profileData, setProfileData] = useState(initialState);
    const [image, setImage] = useState('');
    const [editUser] = useEditUserMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.name) setProfileData((pre) => ({ ...pre, name: user.name }));
        if (user.mobile) setProfileData((pre) => ({ ...pre, mobile: user.mobile }));
        if (user.profilePhoto)
            setProfileData((pre) => ({ ...pre, profilePhoto: user.profilePhoto }));
        if (user.coverPhoto) setProfileData((pre) => ({ ...pre, coverPhoto: user.coverPhoto }));
        if (user.bio) setProfileData((pre) => ({ ...pre, bio: user.bio }));
        if (user.designation) setProfileData((pre) => ({ ...pre, designation: user.designation }));
        if (user.socialMedia?.facebook)
            setProfileData((pre) => ({
                ...pre,
                facebook: user.socialMedia.facebook,
            }));
        if (user.socialMedia?.linkedin)
            setProfileData((pre) => ({
                ...pre,
                linkedin: user.socialMedia.linkedin,
            }));
        if (user.socialMedia?.twitter)
            setProfileData((pre) => ({
                ...pre,
                twitter: user.socialMedia.twitter,
            }));
        if (user.socialMedia?.github)
            setProfileData((pre) => ({
                ...pre,
                github: user.socialMedia.github,
            }));
        if (user.address) setProfileData((pre) => ({ ...pre, address: user.address }));
    }, [user]);

    const handleChange = (e) => {
        const userData = { ...profileData };
        userData[e.target.name] = e.target.value;
        setProfileData(userData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create Form Data
        const formData = new FormData();
        formData.append('profilePhoto', image);

        const fields = Object.keys(profileData);
        fields.forEach((field) => {
            if (field === 'profilePhoto') return;
            formData.append(`${field}`, profileData[field]);
        });

        try {
            await editUser({ id: _id, data: formData });
            navigate('/recruiter-dashboard/recruiter-profile');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-8">
            <RecruiterProfileHeader title="Edit Profile" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-5 shadow rounded-xl">
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Name:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Jhon Snow"
                            className="input input-bordered focus:outline-none w-full"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Phone:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="01XXXXXXXXX"
                            className="input input-bordered focus:outline-none w-full"
                            name="mobile"
                            value={profileData.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Profile Photo:</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered focus:outline-none w-full"
                            alt="Profile Photo"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Designation:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="MERN Stack Developer"
                            className="input input-bordered focus:outline-none w-full"
                            name="designation"
                            value={profileData.designation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Address:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Dhaka, Bangladesh"
                            className="input input-bordered focus:outline-none w-full"
                            name="address"
                            value={profileData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Cover Photo:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Cover Photo Link"
                            className="input input-bordered focus:outline-none w-full"
                            name="coverPhoto"
                            value={profileData.coverPhoto}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="md:col-span-12">
                    <label className="label">
                        <span className="text-secondary">Bio:</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full h-40 focus:outline-none"
                        placeholder="Bio . . ."
                        name="bio"
                        value={profileData.bio}
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* social media */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-5 shadow rounded-xl mt-8">
                <h3 className="col-span-12 text-secondary text-xl">Social Media</h3>
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Facebook:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://facebook.com/useruser.name"
                            className="input input-bordered focus:outline-none w-full"
                            name="facebook"
                            value={profileData.facebook}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">LinkedIn:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.linkedin.com/in/useruser.name"
                            className="input input-bordered focus:outline-none w-full"
                            name="linkedin"
                            value={profileData.linkedin}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Twitter:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://twitter.com/useruser.name"
                            className="input input-bordered focus:outline-none w-full"
                            name="twitter"
                            value={profileData.twitter}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Github:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://github.com/useruser.name"
                            className="input input-bordered focus:outline-none w-full"
                            name="github"
                            value={profileData.github}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <ButtonInfo onClick={handleSubmit} className="px-5 py-3 rounded-lg text-base">
                    Save
                </ButtonInfo>
                <ButtonSecondary className="ml-2">
                    <Link to="/dashboard/candidate-profile">Back</Link>
                </ButtonSecondary>
            </div>
            <ScrollRestoration />
        </div>
    );
}

export default EditRecruiterProfile;
