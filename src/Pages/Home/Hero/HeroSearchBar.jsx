import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import job from '../../../assets/job-search-bar.svg';
import loc from '../../../assets/location-search-bar.svg';
import { jobSearch, resetFilter } from '../../../features/filter/filterSlice';

function HeroSearchBar() {
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetFilter());
        dispatch(jobSearch({ industry, location, searchText: searchText.trim() }));
        setIndustry('');
        setLocation('');
        setSearchText('');
        navigate('/find-jobs');
    };

    return (
        <div className="mt-2">
            <form
                onSubmit={handleSubmit}
                className="container flex flex-col justify-center items-center"
            >
                <div className="mb-2 flex flex-col md:flex-row md:justify-between w-full md:w-max">
                    <div className="relative h-14 w-full md:mr-2">
                        <div className="absolute top-[20px] left-[10px]">
                            <img src={job} alt="" />
                        </div>
                        <select
                            className="shadow h-14 w-full md:w-auto pl-8 pr-2 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none bg-white"
                            onChange={(e) => setIndustry(e.target.value)}
                            value={industry}
                        >
                            <option value="" disabled selected>
                                Industry
                            </option>
                            <option value="Web Development">Web</option>
                            <option value="App Development">App</option>
                            <option value="Software Development">Software</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>
                    <div className="relative h-14 my-2 md:my-0 w-full">
                        <div className="absolute top-[20px] left-[7px]">
                            <img src={loc} alt="" />
                        </div>
                        <select
                            className="shadow h-14 w-full rounded-xl md:pl-10 md:pr-20 z-0 focus:outline-none bg-white"
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
                </div>
                <div className="relative w-full">
                    <div className="hidden md:block absolute top-4 left-[14px]">
                        <i className="fas fa-search text-neutral" />
                    </div>
                    <input
                        type="text"
                        className="shadow input-bordered h-14 pl-5 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none w-full"
                        placeholder="Search Name..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="absolute top-2 right-2">
                        <input
                            value="Search"
                            type="submit"
                            className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary hover:cursor-pointer"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HeroSearchBar;
