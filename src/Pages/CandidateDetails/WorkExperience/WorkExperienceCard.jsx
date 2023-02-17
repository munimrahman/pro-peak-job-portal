import React from 'react';
import brand from '../../../assets/brand-1.png';

function WorkExperienceCard() {
    return (
        <div className="border bg-[#F8FAFA] rounded-lg p-3">
            <div className="flex justify-between">
                <div className="flex mt-5 mb-4">
                    <img src={brand} alt="" />
                    <div className="ml-3">
                        <h4 className="text-secondary text-lg font-bold">LinkedIn</h4>
                        <span className="text-neutral text-xs">
                            <i className="fas fa-map-marker-alt mr-1" />
                            New York, US
                        </span>
                    </div>
                </div>
            </div>
            <h3 className="text-secondary font-bold">Senior Software Engineer</h3>
            <div className="text-sm text-neutral mt-1 mb-1">
                <span className="mr-5">
                    <i className="fas fa-briefcase mr-1" /> Fulltime
                </span>
            </div>
            <p className="text-neutral text-sm mb-3">
                <i className="fas fa-business-time mr-1" />
                Nov 2021 - Present · 1 yr 4 mos
            </p>

            <p className="text-base text-accent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                eveniet, dolor quo repellendus pariatur
            </p>
        </div>
    );
}

export default WorkExperienceCard;
