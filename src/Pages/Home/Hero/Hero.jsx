import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';
import { jobSearch } from '../../../features/filter/filterSlice';
import Navbar from '../../Shared/Navbar/Navbar';
import './Hero.css';
import HeroSearchBar from './HeroSearchBar';

function Hero() {
    const [stickyNav, setStickyNav] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset !== 0);
            // eslint-disable-next-line no-return-assign
            return () => (window.onscroll = null);
        };
    }, [setStickyNav]);

    const handlePopularSearch = (value) => {
        dispatch(jobSearch({ industry: '', location: '', searchText: value }));
        navigate('/find-jobs');
    };

    return (
        <div className="hero-bg">
            <Navbar
                stickyNav={
                    stickyNav
                        ? 'fixed w-full shadow-md top-0 bg-white transition-all duration-1000 ease-in-out'
                        : 'py-6'
                }
            />
            <div className="max-w-[1115px] mx-auto mt-5 md:mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 flex-row-reverse">
                    <div className="px-5 sm:px-14">
                        <h1 className="text-3xl sm:text-5xl text-secondary font-bold">
                            The <span className="text-primary">Easiest Way</span> to Get Your New
                            Job
                        </h1>
                        <p className="text-accent text-base mt-6">
                            Each month, more than 3 million job seekers turn to website in their
                            search for work, making over 140,000 applications every single day
                        </p>
                        {/* job search bar */}
                        <HeroSearchBar />
                        {/* job search bar end */}
                        <p className="mt-4 text-md text-accent">
                            <span className="font-bold">Popular Searches:</span>{' '}
                            <button
                                onClick={() => handlePopularSearch('designer')}
                                className="underline underline-offset-2"
                            >
                                Designer,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('web')}
                                className="underline underline-offset-2"
                            >
                                Web,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('ios')}
                                className="underline underline-offset-2"
                            >
                                IOS,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('developer')}
                                className="underline underline-offset-2"
                            >
                                Developer,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('react')}
                                className="underline underline-offset-2"
                            >
                                React,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('java')}
                                className="underline underline-offset-2"
                            >
                                Java,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('python')}
                                className="underline underline-offset-2"
                            >
                                Python,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('javascript')}
                                className="underline underline-offset-2"
                            >
                                JavaScript,
                            </button>{' '}
                            <button
                                onClick={() => handlePopularSearch('php')}
                                className="underline underline-offset-2"
                            >
                                PHP,
                            </button>{' '}
                        </p>
                    </div>
                    <div className="mt-3 hidden lg:block">
                        <div className="flex justify-center object">
                            <img src={banner1} alt="" />
                        </div>
                        <div className="mt-12 object1">
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
