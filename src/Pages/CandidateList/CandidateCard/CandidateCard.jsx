import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function CandidateCard({ user }) {
    const { _id, name, profilePhoto, certifications } = user || {};

    return (
        <div className="border rounded-lg bg-[#F8FAFF] p-3">
            <div className="flex">
                <div className={`avatar ${'online' || 'offline'}`}>
                    <div className="w-16 rounded-full">
                        <img src={profilePhoto} alt="" />
                    </div>
                </div>
                <div className="ml-3">
                    <Link to={`/candidate-list/${_id}`}>
                        <h3 className="font-bold text-secondary hover:text-primary">
                            {name}{' '}
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
                <h4 className="font-bold text-secondary mt-3 text-sm">ProPeak Certifications</h4>
                {certifications.length > 0 ? (
                    <div className="mt-1 flex flex-wrap">
                        {certifications.map((c, i) => (
                            <span
                                key={i}
                                className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div className="mt-1 flex flex-wrap">
                        <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                            No Certifications Available
                        </span>
                    </div>
                )}
            </div>

            <div className="divider my-1" />
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-accent">
                    <span className="text-xl text-primary font-bold">$80</span>/Hour
                </p>
                <Link to={`/candidate-list/${_id}`}>
                    <ButtonInfo>Hire Now</ButtonInfo>
                </Link>
            </div>
        </div>
    );
}

export default CandidateCard;
