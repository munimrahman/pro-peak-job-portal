import React from 'react';
import key from '../../../assets/key-search-bar.svg';

function HeaderBrowseSearch({ title, description }) {
    return (
        <div className="bg-[#f2f6fd] py-12 rounded-xl mt-8 flex flex-col items-center header-search-box">
            <h1 className="text-secondary text-3xl font-bold">{title}</h1>
            <p className="md:w-6/12 text-center text-sm text-neutral mt-3 mb-10">{description}</p>
            <div className="relative">
                <div className="absolute top-[23px] left-3">
                    <img src={key} alt="" />
                </div>
                <input
                    type="text"
                    className="h-14 pl-10 pr-20 rounded-xl z-0 focus:outline-none"
                    placeholder="Search Name..."
                />
                <div className="absolute top-2 right-2">
                    <button className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderBrowseSearch;
