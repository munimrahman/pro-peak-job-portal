import React from 'react';
import brand from '../../../assets/brand-1.png';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function SimilarJobsCard() {
    return (
        <div className="border-t mt-4">
            <div className="flex items-start my-4">
                <img src={brand} alt="" />
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary hover:text-primary leading-6">
                        UI / UX Designer Full Time Urgent
                    </h3>
                    <div>
                        <span className="text-xs text-[#a0abb8]">
                            <i className="fas fa-briefcase mr-1" />
                            Fulltime
                        </span>

                        <span className="text-xs text-[#a0abb8] ml-2">
                            <i className="far fa-clock mr-1" />3 mins ago
                        </span>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                        <p className="text-sm text-accent">
                            <span className="text-primary font-bold">$80-$150</span>
                            /Hour
                        </p>
                        <ButtonInfo className="text-xs">Apply</ButtonInfo>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimilarJobsCard;
