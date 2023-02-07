import React, { useEffect, useState } from 'react';
import heroBg from '../../../assets/hero-bg.svg';
import Navbar from '../../Shared/Navbar/Navbar';

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
        <div style={{ backgroundImage: `url(${heroBg})` }}>
            <Navbar
                stickyNav={
                    stickyNav
                        ? 'fixed shadow-md top-0 bg-white transition-all duration-1000 ease-in-out'
                        : 'py-10'
                }
            />
            <h1 className="text-3xl text-secondary text-center my-10 border border-fuchsia-400">
                This is Hero Section
            </h1>
            <h1 className="text-3xl text-secondary text-center my-10 underline-offset-4">
                This is Hero Section
            </h1>
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
        </div>
    );
}

export default Hero;
