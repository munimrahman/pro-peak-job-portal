import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import img from '../../../assets/job-card-img.png';

function SkillTestCard({ quiz }) {
    const { _id, title, times, totalQuestions, featuredPhoto } = quiz || {};

    return (
        <div className="border rounded-xl p-2 bg-[#F8FAFF] shadow-md">
            <div className="relative">
                <img src={featuredPhoto || img} alt="" className="rounded-xl w-full h-56" />
                <div className="absolute top-0 m-2">
                    <span className="capitalize text-xs bg-primary text-white hover:cursor-pointer px-2 py-1 rounded">
                        Free
                    </span>
                </div>
            </div>
            <Link to={`/quiz/${_id}`}>
                <h2 className="text-secondary hover:text-primary text-xl hover:cursor-pointer font-bold mt-4">
                    {title}
                </h2>
            </Link>
            <div className="mt-1">
                <p className="text-accent text-sm">
                    <i className="far fa-clock" /> {times}
                </p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-primary">
                    <i className="fas fa-poll mr-1" />
                    {totalQuestions} Question
                </span>
                <Link to={`/quiz/${_id}`}>
                    <ButtonInfo>Take Test</ButtonInfo>
                </Link>
            </div>
        </div>
    );
}

export default SkillTestCard;
