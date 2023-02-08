import React from 'react';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import './WehiringBox.css';

function WeHiringBox() {
    return (
        <div className="flex justify-center border rounded-md  max-w-[950px] mx-auto mt-14 hiring-box px-5 py-7 mb-5">
            <h4 className="text-neutral font-bold text-xl self-start">
                WE ARE <br /> <span className="text-5xl text-secondary">HIRING</span>
            </h4>
            <p className="text-neutral text-lg md:mt-8 md:mx-5">
                Let’s <span className="text-secondary font-bold">Work</span> <br /> Together
                <br /> & <span className="text-secondary font-bold">Explore</span> <br />{' '}
                Opportunities
            </p>
            <ButtonPrimary className="self-center">Apply Now</ButtonPrimary>
        </div>
    );
}

export default WeHiringBox;
