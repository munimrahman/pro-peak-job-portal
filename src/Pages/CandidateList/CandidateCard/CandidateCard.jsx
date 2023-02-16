import React from 'react';
import img from '../../../assets/brand-1.png';

function CandidateCard() {
    return (
        <div className="border rounded-lg bg-[#F8FAFF] text-center">
            <img src={img} alt="" className="inline-block mt-7" />
            <div className="my-7">
                <h3 className="font-bold text-xl">Car Toys</h3>
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
                    Dhaka, Bangladesh
                </p>
            </div>
            <button className="bg-info text-sm text-secondary p-3 rounded-lg hover:text-primary mb-7">
                15 Jobs Open
            </button>
        </div>
    );
}

export default CandidateCard;
