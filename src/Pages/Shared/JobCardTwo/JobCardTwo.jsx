import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function JobCardTwo({ job }) {
    const {
        _id,
        title,
        tags = [],
        description,
        salary,
        jobType,
        createdAt,
        company: { name, logo, location } = {},
    } = job || {};
    console.log(tags);
    return (
        <div className="border bg-[#F8FAFA] rounded-lg p-3">
            <div className="flex mt-5 mb-4">
                <img src={logo} alt="" className="w-14 h-14 rounded-lg" />
                <div className="ml-3">
                    <h4 className="text-secondary text-lg font-bold">{name}</h4>
                    <span className="text-neutral text-xs">
                        <i className="fas fa-map-marker-alt mr-1" />
                        {location}
                    </span>
                </div>
            </div>
            <Link to={`/find-jobs/${_id}`}>
                <h2 className="text-secondary text-lg font-bold hover:text-primary">{title}</h2>
            </Link>
            <div className="text-xs text-neutral flex justify-between  my-3">
                <span>
                    <i className="fas fa-briefcase mr-1" /> {jobType}
                </span>
                <span className="">
                    <i className="far fa-clock mr-1" />
                    {moment(createdAt).fromNow()}
                </span>
            </div>

            <p className="text-sm text-accent text-justify">{description?.slice(0, 100)}. . .</p>
            <div className="my-3 flex flex-wrap">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-accent">
                    <span className="text-lg text-primary font-bold">${salary}</span>/Month
                </p>
                <Link to={`/find-jobs/${_id}`}>
                    <ButtonInfo>Apply Now</ButtonInfo>
                </Link>
            </div>
        </div>
    );
}

export default JobCardTwo;
