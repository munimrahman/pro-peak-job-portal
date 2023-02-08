/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import CategorySlide from '../CategorySlide/CategorySlide/CategorySlide';
import Hero from '../Hero/Hero';
import LatestJobs from '../LatestJobs/LatestJobs/LatestJobs';
import WeHiringBox from '../WeHiringBox/WeHiringBox';

function Home() {
    return (
        <section>
            <Hero />
            <div className="mx-2 md:mx-0">
                <div className="text-center text-3xl">
                    <h1 className="text-primary">Hello Text Primary</h1>
                    <h1 className="text-secondary">Hello Text Secondary</h1>
                    <h1 className="text-accent">Hello Text Accent</h1>
                    <h1 className="text-neutral">Hello Text Neutral</h1>
                    <h1 className="text-info">Hello Text Info</h1>
                </div>

                <div className="max-w-[1115px] mx-auto">
                    <CategorySlide />
                    <WeHiringBox />
                    <LatestJobs />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Home;
