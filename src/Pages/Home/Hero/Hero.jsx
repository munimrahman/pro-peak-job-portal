import React, { useEffect, useState } from 'react';
import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';
import Navbar from '../../Shared/Navbar/Navbar';
import './Hero.css';

// const styleObj = {
//     backgroundImage: `url(${heroBg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     minHeight: '750px',
//     width: '100%',
// };

function Hero() {
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset !== 0);
            // eslint-disable-next-line no-return-assign
            return () => (window.onscroll = null);
        };
    }, [setStickyNav]);
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
                        <p className="text-accent text-base sm:text-lg mt-6">
                            Each month, more than 3 million job seekers turn to website in their
                            search for work, making over 140,000 applications every single day
                        </p>
                        <div className="form-control w-full max-w-xs mt-6">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <p className="mt-6 text-md text-accent">
                            <span className="font-bold">Popular Searches:</span>{' '}
                            <span className="underline underline-offset-2">Designer,</span>{' '}
                            <span className="underline underline-offset-2">Web,</span>{' '}
                            <span className="underline underline-offset-2">IOS,</span>{' '}
                            <span className="underline underline-offset-2">Developer,</span>{' '}
                            <span className="underline underline-offset-2">React,</span>{' '}
                            <span className="underline underline-offset-2">Java,</span>{' '}
                            <span className="underline underline-offset-2">Python,</span>{' '}
                            <span className="underline underline-offset-2">JavaScript,</span>{' '}
                            <span className="underline underline-offset-2">PHP,</span>{' '}
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
