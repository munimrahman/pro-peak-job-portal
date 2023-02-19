/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import ProfileHeader from './ProfileHeader';

function EditProfile() {
    return (
        <div className="p-8">
            <ProfileHeader title="Edit Profile" />
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
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Email:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="jhon@email.com"
                            className="input input-bordered focus:outline-none w-full"
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
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Portfolio:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.portfolio.com"
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
                            <span className="text-secondary">Profile Photo:</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered focus:outline-none w-full"
                        />
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Title:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="MERN Stack Developer"
                            className="input input-bordered focus:outline-none w-full"
                        />
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
                            <span className="text-secondary">Hourly Rate in Dollar:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="25"
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
                            <span className="text-secondary">Skills:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="React, Nodejs"
                            className="input input-bordered focus:outline-none w-full"
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
                        <span className="text-secondary">Bio:</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full h-40 focus:outline-none"
                        placeholder="Bio . . ."
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
                            placeholder="https://facebook.com/username"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">LinkedIn:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.linkedin.com/in/username"
                            className="input input-bordered focus:outline-none w-full"
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
                            placeholder="https://twitter.com/username"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Github:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://github.com/username"
                            className="input input-bordered focus:outline-none w-full"
                        />
                    </div>
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

export default EditProfile;
