import moment from 'moment';
import React from 'react';
import convertTime from '../../../utils/convertTime';

function WorkExperienceCard({ experience }) {
    const {
        designation,
        companyName,
        companyLocation,
        jobType,
        jobTime: { start, end } = {},
        description,
    } = experience || {};

    return (
        <div className="border bg-[#F8FAFA] rounded-lg p-3">
            <h3 className="text-secondary text-lg font-bold">{designation}</h3>
            <div className="flex justify-between my-1">
                <div className="flex gap-2 items-center">
                    <h4 className="text-secondary font-medium">{companyName}</h4>
                    <span className="text-neutral text-xs">
                        <i className="fas fa-map-marker-alt mr-1" />
                        {companyLocation}
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 my-1">
                <p className="text-sm text-neutral ">
                    <i className="fas fa-briefcase mr-1" /> {jobType}
                </p>
                <p className="text-neutral text-sm mb-3">
                    <i className="fas fa-business-time mr-1" />
                    {moment(start).format('ll')} - {end ? `${moment(end).format('ll')}` : 'Present'}{' '}
                    - {end ? convertTime(start, end) : convertTime(start, Date.now())}
                </p>
            </div>

            <p className="text-base text-accent">{description}</p>
        </div>
    );
}

export default WorkExperienceCard;
