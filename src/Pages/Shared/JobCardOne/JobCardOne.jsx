import React from 'react';
import img from '../../../assets/job-card-img.png';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function JobCardOne() {
    return (
        <div className="border rounded-xl p-2">
            <img src={img} alt="" className="rounded-xl w-full" />
            <h2 className="text-secondary hover:text-primary text-xl hover:cursor-pointer font-bold mt-4">
                React Native Web Developer
            </h2>
            <div className="mt-1">
                <span className="text-xs text-[#a0abb8]">
                    <i className="fas fa-map-marker-alt mr-1" />
                    Dhaka, Bangladesh
                </span>

                <span className="text-xs text-[#a0abb8] ml-2">
                    <i className="far fa-clock mr-1" />3 mins ago
                </span>
            </div>
            <div className="mt-2 flex flex-wrap">
                <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                    JavaScript
                </span>
                <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                    React
                </span>
                <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                    Node
                </span>
                <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                    Express
                </span>
            </div>
            <p className="text-sm my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                eveniet, dolor quo repellendus pariatur
            </p>
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-accent">
                    <span className="text-xl text-primary font-bold">$80-$150</span>/Hour
                </p>
                <ButtonInfo>Apply Now</ButtonInfo>
            </div>
        </div>
    );
}

export default JobCardOne;
