import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/job-card-img.png';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function SkillTestCard() {
    return (
        <div className="border rounded-xl p-2 bg-[#F8FAFF] shadow-md">
            <div className="relative">
                <img src={img} alt="" className="rounded-xl w-full" />
                <div className="absolute top-0 m-2">
                    <span className="capitalize text-xs bg-primary text-white hover:cursor-pointer px-2 py-1 rounded">
                        Free
                    </span>
                </div>
            </div>
            <h2 className="text-secondary hover:text-primary text-xl hover:cursor-pointer font-bold mt-4">
                JavaScript Basics
            </h2>
            <div className="mt-1">
                <p className="text-accent text-sm">
                    <i className="far fa-clock" /> 30 Mins
                </p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-primary">
                    <i className="fas fa-poll mr-1" />
                    30 Question
                </span>
                <ButtonInfo>
                    <Link to="/quiz">Take Test</Link>
                </ButtonInfo>
            </div>
        </div>
    );
}

export default SkillTestCard;
