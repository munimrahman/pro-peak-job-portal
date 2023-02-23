import React from 'react';
import job from '../../assets/job-search-bar.svg';
import key from '../../assets/key-search-bar.svg';
import loc from '../../assets/location-search-bar.svg';

function JobSearchBar() {
    return (
        <div className="">
            <div className="container flex flex-col md:flex-row justify-center items-center">
                <div className="relative h-14">
                    <div className="absolute top-[20px] left-[10px]">
                        <img src={job} alt="" />
                    </div>
                    <select className="h-14 w-auto pl-8 pr-2 md:pl-10 md:pr-20 rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg z-0 focus:outline-none bg-white">
                        <option>Industry</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="relative h-14">
                    <div className="absolute top-[20px] left-[7px]">
                        <img src={loc} alt="" />
                    </div>
                    <select className="h-14 w-auto pl-8 pr-2 rounded-lg md:rounded-none md:pl-10 md:pr-20 z-0 focus:outline-none bg-white">
                        <option>Location</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="relative">
                    <div className="absolute top-[23px] left-3">
                        <img src={key} alt="" />
                    </div>
                    <input
                        type="text"
                        className="h-14 pl-10 pr-20 rounded-l-lg md:rounded-l-none rounded-r-lg z-0 focus:outline-none"
                        placeholder="Search anything..."
                    />
                    <div className="absolute top-2 right-2">
                        <button className="flex justify-center items-center h-10 w-20 text-white rounded-lg bg-primary hover:bg-secondary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobSearchBar;
