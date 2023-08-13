/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useGetCompaniesQuery } from '../../../features/company/companyApi';
import { useAddJobMutation } from '../../../features/jobPosts/jobPostApi';
import ManageJobHeader from './ManageJobHeader';

const initialState = {
    title: '',
    industry: '',
    salary: '',
    jobLevel: '',
    experience: '',
    jobType: '',
    workPlace: '',
    deadline: '',
    tags: '',
    description: '',
    location: '',
    featuredPhoto: '',
    coverPhoto: '',
    hiringManagerId: '',
    company: '',
};

function PostJob() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { data: { companies = [] } = {} } = {} } = useGetCompaniesQuery(
        `hiringManager=${_id}`
    );

    const companyInfo = useMemo(() => companies[0] || {}, [companies]);
    const [jobData, setJobData] = useState(initialState);
    const [addJob] = useAddJobMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (companyInfo._id) setJobData((pre) => ({ ...pre, company: companyInfo._id }));
        if (companyInfo.location) setJobData((pre) => ({ ...pre, location: companyInfo.location }));
        if (companyInfo.workPlace)
            setJobData((pre) => ({ ...pre, workPlace: companyInfo.workPlace }));
        if (companyInfo.coverPhoto)
            setJobData((pre) => ({ ...pre, coverPhoto: companyInfo.coverPhoto }));
    }, [companyInfo]);

    const handleChange = (e) => {
        const userData = { ...jobData };
        userData[e.target.name] = e.target.value;
        setJobData(userData);
    };

    const handleSubmit = () => {
        const data = { ...jobData };
        data.hiringManagerId = _id;
        console.log(data);
        addJob({ data, id: `hiringManager=${_id}` });
        navigate('/recruiter-dashboard/manage-jobs');
    };

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
                            name="title"
                            value={jobData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Industry:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="industry"
                            value={jobData.industry}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Industry
                            </option>
                            <option value="Web Development">Web Development</option>
                            <option value="Software Development">Software Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Retail & Products">Retail & Products</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Video Editor">Video Editor</option>
                            <option value="Finance">Finance</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Others">Others</option>
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
                            name="salary"
                            value={jobData.salary}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Type:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="jobType"
                            value={jobData.jobType}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Job Type
                            </option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Freelancer">Freelancer</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Job Level:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="jobLevel"
                            value={jobData.jobLevel}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Job Level
                            </option>
                            <option value="Intern Level">Intern Level</option>
                            <option value="Entry Level">Entry Level</option>
                            <option value="Junior Level">Junior Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior Level">Senior Level</option>
                        </select>
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Experience:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="experience"
                            value={jobData.experience}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Experience
                            </option>
                            <option value="0 Year">0 Year</option>
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years">4 Years</option>
                            <option value="5 Years+">5 Years+</option>
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
                            name="deadline"
                            value={jobData.deadline}
                            onChange={handleChange}
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
                            name="tags"
                            value={jobData.tags}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Featured Photo Link:</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered focus:outline-none w-full"
                            placeholder="https://placehold.co/500"
                            name="featuredPhoto"
                            value={jobData.featuredPhoto}
                            onChange={handleChange}
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
                        name="description"
                        value={jobData.description}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mt-5">
                <ButtonInfo
                    onClick={handleSubmit}
                    type="submit"
                    className="px-5 py-3 rounded-lg text-base"
                >
                    Save
                </ButtonInfo>
                <ButtonSecondary type="button" className="ml-2">
                    <Link to="/dashboard/candidate-profile">Back</Link>
                </ButtonSecondary>
            </div>
        </div>
    );
}

export default PostJob;
