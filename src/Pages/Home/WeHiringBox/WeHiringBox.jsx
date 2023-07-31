import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import './WehiringBox.css';

function WeHiringBox() {
    return (
        <div className="flex flex-col items-center sm:flex-row justify-around md:justify-center border rounded-md  max-w-[950px] mx-auto mt-16 hiring-box px-5 py-5">
            <h4 className="text-neutral font-bold text-xl md:self-start">
                WE ARE <br /> <span className="text-5xl text-secondary">HIRING</span>
            </h4>
            <p className="text-neutral text-2xl md:text-lg my-4 md:my-0 md:mt-8 md:mx-5">
                Let’s <span className="text-secondary font-bold">Work</span> <br /> Together
                <br /> & <span className="text-secondary font-bold">Explore</span> <br />{' '}
                Opportunities
            </p>
            {/* TODO: set url of a propeak job */}
            <Link to="/find-jobs">
                <ButtonPrimary className="self-center">Apply Now</ButtonPrimary>
            </Link>
        </div>
    );
}

export default WeHiringBox;
