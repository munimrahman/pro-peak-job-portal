import React from 'react';

function WorkExperienceCard() {
    return (
        <div className="border bg-[#F8FAFA] rounded-lg p-3">
            <h3 className="text-secondary text-lg font-bold">Senior Software Engineer</h3>
            <div className="flex justify-between my-1">
                <div className="flex gap-2 items-center">
                    <h4 className="text-secondary font-medium">LinkedIn</h4>
                    <span className="text-neutral text-xs">
                        <i className="fas fa-map-marker-alt mr-1" />
                        New York, US
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 my-1">
                <p className="text-sm text-neutral ">
                    <i className="fas fa-briefcase mr-1" /> Fulltime
                </p>
                <p className="text-neutral text-sm mb-3">
                    <i className="fas fa-business-time mr-1" />
                    Nov 2021 - Present · 1 yr 4 mos
                </p>
            </div>

            <p className="text-base text-accent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                eveniet, dolor quo repellendus pariatur
            </p>
        </div>
    );
}

export default WorkExperienceCard;
