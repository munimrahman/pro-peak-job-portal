import React from 'react';
import heroBg from '../../../assets/hero-bg.svg';
import Navbar from '../../Shared/Navbar/Navbar';

function Hero() {
    return (
        <div style={{ backgroundImage: `url(${heroBg})` }}>
            <Navbar />
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
            <h1 className="text-3xl text-secondary text-center my-10">This is Hero Section</h1>
        </div>
    );
}

export default Hero;
