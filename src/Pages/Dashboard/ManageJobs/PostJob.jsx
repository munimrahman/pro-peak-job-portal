/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import ManageJobHeader from './ManageJobHeader';

function PostJob() {
    return (
        <div className="p-8">
            <ManageJobHeader title="Post a New Job" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-5 shadow rounded-xl">
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Title:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Senior MERN Stack Developer
                            "
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Industry:</span>
                        </label>
                        <select className="select select-bordered focus:outline-none w-full">
                            <option>Web Development</option>
                            <option>Graphic Designer</option>
                            <option>Product Designer</option>
                            <option>UI/UX Designer</option>
                            <option>Video Editor</option>
                            <option>App Developer</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Monthly Salary in Dollar:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="2500"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Level:</span>
                        </label>
                        <select className="select select-bordered focus:outline-none w-full">
                            <option>Intern</option>
                            <option>Junior Level</option>
                            <option>Mid Level</option>
                            <option>Senior Level</option>
                            <option>Team Lead</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Experience:</span>
                        </label>
                        <select className="select select-bordered focus:outline-none w-full">
                            <option>Fresher</option>
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                            <option>4 Years</option>
                            <option>5 Years+</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Type:</span>
                        </label>
                        <select className="select select-bordered focus:outline-none w-full">
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Freelancer</option>
                        </select>
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Work Place:</span>
                        </label>
                        <select className="select select-bordered focus:outline-none w-full">
                            <option>On Site</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Deadline</span>
                        </label>
                        <input
                            type="date"
                            placeholder="MERN Stack Developer"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Tags:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="React, Node, JavaScript"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Language:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Bangla, English"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Featured Photo:</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Cover Photo:</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered focus:outline-none w-full"
                        />
                    </div>
                </div>
                <div className="md:col-span-12">
                    <label className="label">
                        <span className="text-secondary">Job Description:</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full h-40 focus:outline-none"
                        placeholder="Job Description . . ."
                    />
                </div>
            </div>

            <div className="mt-5">
                <ButtonInfo className="px-5 py-3 rounded-lg text-base">Save</ButtonInfo>
                <ButtonSecondary className="ml-2">
                    <Link to="/dashboard/candidate-profile">Back</Link>
                </ButtonSecondary>
            </div>
        </div>
    );
}

export default PostJob;
