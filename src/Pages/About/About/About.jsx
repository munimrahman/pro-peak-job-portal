import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

function About() {
    useTitle('About Us | Pro Peak');
    return (
        <div className="max-w-[1115px] mx-auto">
            <h1 className="text-4xl text-primary text-center mt-16 py-20">
                About Page Coming Soon!
            </h1>
            <ScrollRestoration />
        </div>
    );
}

export default About;
