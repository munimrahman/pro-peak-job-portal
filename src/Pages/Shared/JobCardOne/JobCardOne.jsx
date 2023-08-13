import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function JobCardOne({ job }) {
    const {
        _id,
        title,
        tags,
        description,
        salary,
        jobType,
        createdAt,
        featuredPhoto,
        company: { location },
    } = job || {};

    return (
        <div className="border rounded-xl p-2 bg-[#F8FAFF] shadow-md">
            <div className="relative">
                <figure className="">
                    <img src={featuredPhoto} alt="" className="rounded-xl w-full h-52" />
                </figure>
                <div className="absolute top-0 m-2">
                    <span className="capitalize text-xs bg-primary text-white hover:cursor-pointer px-2 py-1 rounded">
                        {jobType}
                    </span>
                </div>
            </div>
            <Link to={`/find-jobs/${_id}`}>
                <h2 className="text-secondary hover:text-primary text-xl hover:cursor-pointer font-bold mt-4">
                    {title}
                </h2>
            </Link>
            <div className="mt-1">
                <span className="text-xs text-[#a0abb8]">
                    <i className="fas fa-map-marker-alt mr-1" />
                    {location}
                </span>

                <span className="text-xs text-[#a0abb8] ml-2">
                    <i className="far fa-clock mr-1" /> {moment(createdAt).fromNow()}
                </span>
            </div>
            <div className="mt-1 flex flex-wrap">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-accent my-3">{description?.slice(0, 100)}...</p>
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-accent">
                    <span className="text-xl text-primary font-bold">${salary}</span>/Month
                </p>
                <Link to={`/find-jobs/${_id}`}>
                    <ButtonInfo>Apply Now</ButtonInfo>
                </Link>
            </div>
        </div>
    );
}

export default JobCardOne;
