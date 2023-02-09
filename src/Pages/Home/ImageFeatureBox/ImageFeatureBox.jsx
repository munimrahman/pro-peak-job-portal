import React from 'react';
import rightBottom from '../../../assets/controlcard.png';
import leftTop from '../../../assets/img-chart.png';
import img from '../../../assets/img-feature-box.png';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';

function ImageFeatureBox() {
    return (
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="relative w-2/3 lg:w-10/12">
                <img
                    src={leftTop}
                    alt=""
                    className="absolute -top-14 -left-16 md:-top-16 md:-left-28 z-10"
                />
                <img src={img} alt="" className="relative z-20 rounded-3xl" />
                <img
                    src={rightBottom}
                    alt=""
                    className="absolute -bottom-32 -right-16 md:-bottom-40 md:-right-32 z-0"
                />
            </div>
            <div className="mt-16 md:px-14 md:ml-5">
                <h2 className="text-[52px] leading-none font-bold text-secondary font-serif">
                    <span className="text-3xl text-[#a0abb8]">Millions Of Jobs.</span> <br /> Find
                    The One That’s <span className="text-primary">Right</span> For You
                </h2>
                <p className="my-3 leading-snug">
                    Search all the open positions on the web. Get your own personalized salary
                    estimate. Read reviews on over 600,000 companies worldwide. The right job is out
                    there.
                </p>
                <ButtonPrimary>Search Jobs</ButtonPrimary>
            </div>
        </div>
    );
}

export default ImageFeatureBox;
