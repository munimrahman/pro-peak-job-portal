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
            {/* <div className="text-center self-center"> */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-7 w-10/12 mx-auto text-center">
                    New Things Will Always Update Regularly
                </h1>
                <div className="relative">
                    <div className="hidden md:block absolute top-4 left-[14px]">
                        <i className="fas fa-envelope text-neutral" />
                    </div>
                    <input
                        type="text"
                        className="h-14 pl-5 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none"
                        placeholder="Your Email"
                    />
                    <div className="absolute top-2 right-2">
                        <button className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <img src={imgRight} alt="" className="hidden lg:block" />
        </div>
    );
}

export default SubscribeBox;
