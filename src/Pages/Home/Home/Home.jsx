/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import CategorySlide from '../CategorySlide/CategorySlide/CategorySlide';
import Hero from '../Hero/Hero';
import HomeStats from '../HomeStats/HomeStats';
import ImageFeatureBox from '../ImageFeatureBox/ImageFeatureBox';
import JobsByLocation from '../JobsByLocation/JobsByLocation';
import LatestJobs from '../LatestJobs/LatestJobs';
import NewsBlogs from '../News&Blogs/News&Blogs';
import TopRecruiters from '../TopRecruiters/TopRecruiters';
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
                    <ImageFeatureBox />
                    <HomeStats />
                    <TopRecruiters />
                    <JobsByLocation />
                    <NewsBlogs />
                    <SubscribeBox />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Home;
