import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import job from '../../assets/job-search-bar.svg';
import loc from '../../assets/location-search-bar.svg';
import { jobSearch, resetFilter } from '../../features/filter/filterSlice';

function JobSearchBar() {
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetFilter());
        dispatch(jobSearch({ industry, location, searchText: searchText.trim() }));
        setIndustry('');
        setLocation('');
        setSearchText('');
    };

    return (
        <div className="">
            <form
                className="container flex flex-col md:flex-row justify-center items-center"
                onSubmit={handleSubmit}
            >
                <div className="relative h-14 w-full">
                    <div className="absolute top-[20px] left-[10px]">
                        <img src={job} alt="" />
                    </div>
                    <select
                        className="h-14 w-full md:w-auto pl-8 pr-2 md:pl-10 md:pr-20 rounded-l-xl rounded-r-xl md:rounded-r-none md:rounded-l-xl z-0 focus:outline-none bg-white"
                        onChange={(e) => setIndustry(e.target.value)}
                        value={industry}
                    >
                        <option value="" disabled selected>
                            Industry
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Software Development">Software</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>
                <div className="relative h-14 my-2 md:my-0 w-full">
                    <div className="absolute top-[20px] left-[7px]">
                        <img src={loc} alt="" />
                    </div>
                    <select
                        className="h-14 w-full md:w-auto pl-8 pr-2 rounded-xl md:rounded-none md:pl-10 md:pr-20 z-0 focus:outline-none bg-white"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    >
                        <option value="" disabled selected>
                            Location
                        </option>
                        <option value="Dhaka, Bangladesh">Dhaka</option>
                        <option value="Khulna, Bangladesh">Khulna</option>
                        <option value="Barishal, Bangladesh">Barishal</option>
                        <option value="Rangpur, Bangladesh">Rangpur</option>
                    </select>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-4 left-[14px]">
                        <i className="fas fa-search text-neutral" />
                    </div>
                    <input
                        type="text"
                        className="h-14 pl-5 md:pl-10 md:pr-20 rounded-xl md:rounded-none md:rounded-r-xl z-0 focus:outline-none"
                        placeholder="Search Name..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="absolute top-2 right-2">
                        <button
                            className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default JobSearchBar;
