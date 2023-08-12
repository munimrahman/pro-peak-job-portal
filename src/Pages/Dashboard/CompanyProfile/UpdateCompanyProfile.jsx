/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useEditCompanyMutation, useGetCompaniesQuery } from '../../../features/company/companyApi';

const initialState = {
    name: '',
    logo: '',
    coverPhoto: '',
    industry: '',
    companySize: '',
    location: '',
    description: '',
    foundedIn: '',
    workPlace: '',
    website: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    motto: '',
};

function UpdateCompanyProfile() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { data: { companies = [] } = {} } = {} } = useGetCompaniesQuery(
        `hiringManager=${_id}`
    );
    const companyInfo = useMemo(() => companies[0] || {}, [companies]);
    const [companyData, setCompanyData] = useState(initialState);
    const [editCompany] = useEditCompanyMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (companyInfo?.name) setCompanyData((pre) => ({ ...pre, name: companyInfo?.name }));
        if (companyInfo?.logo) setCompanyData((pre) => ({ ...pre, logo: companyInfo?.logo }));
        if (companyInfo?.coverPhoto)
            setCompanyData((pre) => ({ ...pre, coverPhoto: companyInfo?.coverPhoto }));
        if (companyInfo?.industry)
            setCompanyData((pre) => ({ ...pre, industry: companyInfo?.industry }));
        if (companyInfo?.companySize)
            setCompanyData((pre) => ({ ...pre, companySize: companyInfo?.companySize }));
        if (companyInfo?.location)
            setCompanyData((pre) => ({ ...pre, location: companyInfo?.location }));
        if (companyInfo?.description)
            setCompanyData((pre) => ({ ...pre, description: companyInfo?.description }));
        if (companyInfo?.foundedIn)
            setCompanyData((pre) => ({ ...pre, foundedIn: companyInfo?.foundedIn }));
        if (companyInfo?.workPlace)
            setCompanyData((pre) => ({ ...pre, workPlace: companyInfo?.workPlace }));
        if (companyInfo?.website)
            setCompanyData((pre) => ({ ...pre, website: companyInfo?.website }));
        if (companyInfo?.phone) setCompanyData((pre) => ({ ...pre, phone: companyInfo?.phone }));
        if (companyInfo?.email) setCompanyData((pre) => ({ ...pre, email: companyInfo?.email }));
        if (companyInfo?.facebook)
            setCompanyData((pre) => ({ ...pre, facebook: companyInfo?.facebook }));
        if (companyInfo?.linkedin)
            setCompanyData((pre) => ({ ...pre, linkedin: companyInfo?.linkedin }));
        if (companyInfo?.motto) setCompanyData((pre) => ({ ...pre, motto: companyInfo?.motto }));
    }, [companyInfo]);

    const handleChange = (e) => {
        const data = { ...companyData };
        data[e.target.name] = e.target.value;
        setCompanyData(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editCompany({
            id: companyInfo._id,
            data: companyData,
            hrId: 'hiringManager=64d0b287116fcabdd7021495',
        });
        try {
            navigate('/recruiter-dashboard/company-profile');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-secondary text-3xl">Update Company Info</h2>
            <div className="divider my-3" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-5 shadow rounded-xl">
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Name:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="input input-bordered focus:outline-none w-full"
                            name="name"
                            value={companyData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Motto:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Company Motto"
                            className="input input-bordered focus:outline-none w-full"
                            name="motto"
                            value={companyData.motto}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Email:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="company@email.com"
                            className="input input-bordered focus:outline-none w-full"
                            name="email"
                            value={companyData.email}
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
                            name="phone"
                            value={companyData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Location:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Dhaka, Bangladesh"
                            className="input input-bordered focus:outline-none w-full"
                            name="location"
                            value={companyData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Website:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.compnay.com"
                            className="input input-bordered focus:outline-none w-full"
                            name="website"
                            value={companyData.website}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Founded In:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="2006"
                            className="input input-bordered focus:outline-none w-full"
                            name="foundedIn"
                            value={companyData.foundedIn}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Work Place:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="workPlace"
                            value={companyData.workPlace}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Workplace
                            </option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="On Site">On Site</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Company Size:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="companySize"
                            value={companyData.companySize}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select COmpany Size
                            </option>
                            <option value="0-10">0 - 10</option>
                            <option value="11-50">11 - 50</option>
                            <option value="51-100">51 - 100</option>
                            <option value="101-200">101 - 200</option>
                            <option value="201-500">201 - 500</option>
                            <option value="500-Infinity">500+</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Industry:</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="industry"
                            value={companyData.industry}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Select Industry
                            </option>
                            <option value="Web Development">Web Development</option>
                            <option value="Software">Software Development</option>
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
                            <span className="text-secondary">Logo Link:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://placehold.co/400"
                            className="input input-bordered focus:outline-none w-full"
                            name="logo"
                            value={companyData.logo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">Cover Photo Link:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://placehold.co/900x300"
                            className="input input-bordered focus:outline-none w-full"
                            name="coverPhoto"
                            value={companyData.coverPhoto}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="md:col-span-12">
                    <label className="label">
                        <span className="text-secondary">Company Description:</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full h-40 focus:outline-none"
                        placeholder="Description . . ."
                        name="description"
                        value={companyData.description}
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
                            placeholder="https://facebook.com/username"
                            className="input input-bordered focus:outline-none w-full"
                            name="facebook"
                            value={companyData.facebook}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* second col */}
                <div className="col-span-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-secondary">LinkedIn:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.linkedin.com/in/username"
                            className="input input-bordered focus:outline-none w-full"
                            name="linkedin"
                            value={companyData.linkedin}
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
                    <Link to="/recruiter-dashboard/company-profile">Back</Link>
                </ButtonSecondary>
            </div>
            <ScrollRestoration />
        </div>
    );
}

export default UpdateCompanyProfile;
