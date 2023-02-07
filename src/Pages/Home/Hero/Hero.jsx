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
                        ? 'fixed w-full shadow-md top-0 bg-white transition-all duration-1000 ease-in-out'
                        : 'py-6'
                }
            />
            <div className="max-w-[1115px] mx-auto">
                <h1 className="my-10 border border-red-500">Hero Section</h1>
                <h1 className="my-10">Hero Section</h1>
            </div>
        </div>
    );
}

export default Hero;
