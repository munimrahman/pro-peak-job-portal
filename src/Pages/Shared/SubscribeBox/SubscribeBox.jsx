import React from 'react';
import imgLeft from '../../../assets/newsletter-left.png';
import imgRight from '../../../assets/newsletter-right.png';
import bgImg from '../../../assets/subscribe-bg.svg';

function SubscribeBox() {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className="p-14 mt-16 rounded-2xl border flex justify-center"
        >
            <img src={imgLeft} alt="" className="hidden lg:block" />
            <div className="text-center self-center">
                <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-7 w-10/12 mx-auto">
                    New Things Will Always Update Regularly
                </h1>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <img src={imgRight} alt="" className="hidden lg:block" />
        </div>
    );
}

export default SubscribeBox;
