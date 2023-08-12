/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useEditUserMutation, useGetUserQuery } from '../../../features/users/usersApi';
import WorkExperienceCard from '../../CandidateDetails/WorkExperience/WorkExperienceCard';
import ProfileHeader from './ProfileHeader';

const initialState = {
    designation: '',
    companyName: '',
    companyLocation: '',
    jobType: '',
    start: '',
    end: '',
    description: '',
};

function AddWorkExperience() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { user: { workExperience = [] } = {} } = {} } = useGetUserQuery(_id);
    const [experience, setExperience] = useState(initialState);
    const [editUser] = useEditUserMutation();

    const handleChange = (e) => {
        const data = { ...experience };
        data[e.target.name] = e.target.value;
        setExperience(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('workExperience', JSON.stringify(experience));
        editUser({ id: _id, data: formData });
        setExperience(initialState);
    };

    return (
        <div className="p-8">
            <ProfileHeader title="Work Experience" />
            <div className="grid grid-cols-1 gap-5 bg-white p-5 shadow rounded-xl mt-8">
                <div className="grid grid-cols-2 gap-2">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 h-min">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">Designation:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="MERN Stack Developer"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="designation"
                                    value={experience.designation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">Start Date:</span>
                                </label>
                                <input
                                    type="date"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="start"
                                    value={experience.start}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">Company Location:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Dhaka, Bangladesh"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="companyLocation"
                                    value={experience.companyLocation}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="md:ml-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">Company Name:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="companyName"
                                    value={experience.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">End Date:</span>
                                </label>
                                <input
                                    type="date"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="end"
                                    value={experience.end}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-secondary">Job Type:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Fulltime"
                                    className="input input-bordered focus:outline-none w-full max-w-lg"
                                    name="jobType"
                                    value={experience.jobType}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-12">
                            <label className="label">
                                <span className="text-secondary">Description:</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full h-40 focus:outline-none"
                                placeholder="Description . . ."
                                name="description"
                                value={experience.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-5">
                            <ButtonInfo type="submit" className="px-5 py-3 rounded-lg text-base">
                                Save
                            </ButtonInfo>
                            <ButtonSecondary type="button" className="ml-2">
                                <Link to="/dashboard/candidate-profile">Back</Link>
                            </ButtonSecondary>
                        </div>
                    </form>
                    {/* Work Experience */}
                    <div>
                        <h2 className="text-center font-semibold text-lg mb-2 underline">
                            Work Experience
                        </h2>
                        {workExperience.length > 0 ? (
                            <div className="grid gap-3">
                                {workExperience.map((exp, i) => (
                                    <WorkExperienceCard key={i} experience={exp} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center my-3">No Work Experience Found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddWorkExperience;
