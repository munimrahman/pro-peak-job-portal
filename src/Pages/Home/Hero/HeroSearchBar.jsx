import React from 'react';
import job from '../../../assets/job-search-bar.svg';
import loc from '../../../assets/location-search-bar.svg';

function HeroSearchBar() {
    return (
        <div className="mt-2">
            <div className="container flex flex-col justify-center items-center">
                <div className="mb-2 flex flex-col md:flex-row w-full md:w-max">
                    <div className="relative h-14 w-full">
                        <div className="absolute top-[20px] left-[10px]">
                            <img src={job} alt="" />
                        </div>
                        <select className="shadow md:shadow-none h-14 w-full md:w-auto pl-8 pr-2 md:pl-10 md:pr-20 rounded-l-xl rounded-r-xl md:rounded-r-none md:rounded-l-xl z-0 focus:outline-none bg-white">
                            <option>Industry</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                    <div className="relative h-14 my-2 md:my-0 w-full">
                        <div className="absolute top-[20px] left-[7px]">
                            <img src={loc} alt="" />
                        </div>
                        <select className="shadow md:shadow-none h-14 w-full md:w-auto pl-8 pr-2 rounded-xl md:rounded-none md:rounded-r-xl md:pl-10 md:pr-20 z-0 focus:outline-none bg-white">
                            <option>Location</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="hidden md:block absolute top-4 left-[14px]">
                        <i className="fas fa-search text-neutral" />
                    </div>
                    <input
                        type="text"
                        className="shadow input-bordered h-14 pl-5 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none w-full"
                        placeholder="Search Name..."
                    />
                    <div className="absolute top-2 right-2">
                        <button className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSearchBar;
