import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.jpg';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function CandidateCard() {
    return (
        <div className="border rounded-lg bg-[#F8FAFF] p-3">
            <div className="flex">
                <div className={`avatar ${'online' || 'offline'}`}>
                    <div className="w-16 rounded-full">
                        <img src={avatar} alt="" />
                    </div>
                </div>
                <div className="ml-3">
                    <Link to="/candidate-details">
                        <h3 className="text-lg font-bold text-secondary hover:text-primary">
                            Sansa Stark{' '}
                            <span>
                                <i className="fas fa-check-circle text-primary text-sm" />
                            </span>
                        </h3>
                    </Link>
                    <p className="text-xs text-neutral mt-1">
                        <i className="fas fa-map-marker-alt mr-1" />
                        Dhaka, Bangladesh
                    </p>
                </div>
                <div>
                    <i className="far fa-heart ml-3 text-primary hover:cursor-pointer" />
                </div>
            </div>
            <div className="mt-3">
                <h4 className="font-bold text-secondary text-sm">Skills</h4>
                <div className="mt-1 flex flex-wrap">
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
                <h4 className="font-bold text-secondary mt-3 text-sm">ProPeak Certification</h4>
                <div className="mt-1 flex flex-wrap">
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        English
                    </span>
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        JavaScript
                    </span>
                </div>
            </div>

            <div className="divider my-1" />
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-accent">
                    <span className="text-xl text-primary font-bold">$80</span>/Hour
                </p>
                <Link to="/candidate-details">
                    <ButtonInfo>Hire Now</ButtonInfo>
                </Link>
            </div>
        </div>
    );
}

export default CandidateCard;
