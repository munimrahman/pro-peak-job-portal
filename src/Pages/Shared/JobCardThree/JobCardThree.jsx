import React from 'react';
import brand from '../../../assets/brand-1.png';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function JobCardThree() {
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
                <div>
                    <div className="my-3 flex flex-wrap">
                        <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1">
                            JavaScript
                        </span>
                        <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1">
                            React
                        </span>
                        <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1">
                            Node
                        </span>
                        <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-2 py-1 rounded mr-1 my-1">
                            Express
                        </span>
                    </div>
                </div>
            </div>
            <h2 className="text-secondary text-xl font-bold">
                UI / UX Designer Fulltime Salary $800 per month
            </h2>
            <div className="text-xs text-neutral my-3">
                <span className="mr-5">
                    <i className="fas fa-briefcase mr-1" /> Fulltime
                </span>
                <span className="">
                    <i className="far fa-clock mr-1" />4 minutes ago
                </span>
            </div>

            <p className="text-base text-accent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                eveniet, dolor quo repellendus pariatur
            </p>

            <div className="flex justify-between items-center my-3">
                <p className="text-sm text-accent">
                    <span className="text-xl text-primary font-bold">$80-$150</span>/Hour
                </p>
                <ButtonInfo>Apply Now</ButtonInfo>
            </div>
        </div>
    );
}

export default JobCardThree;
