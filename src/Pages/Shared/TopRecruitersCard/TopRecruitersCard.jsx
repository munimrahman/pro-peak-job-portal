import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
    const { _id, name, logo, location } = company || {};
    return (
        <div className="border rounded-lg bg-[#F8FAFF] text-center">
            <img src={logo} alt="" className="inline-block mt-7 w-16 rounded-md" />
            <div className="my-5">
                <Link to={`/company-list/${_id}`} className="hover:text-primary">
                    <h3 className="font-bold text-xl">{name}</h3>
                </Link>
                <div className="rating rating-xs">
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                        checked
                    />
                    <span className="text-xs ml-1 text-[#a0abb8]">(66)</span>
                </div>
                <p className="text-xs text-[#a0abb8]">
                    <i className="fas fa-map-marker-alt mr-1" />
                    {location}
                </p>
            </div>
            {/* TODO: show open jobs */}
            <Link to={`/company-list/${_id}`}>
                <button className="bg-info text-sm text-secondary p-3 rounded-lg hover:text-primary mb-7">
                    15 Jobs Open
                </button>
            </Link>
        </div>
    );
}

export default CompanyCard;
