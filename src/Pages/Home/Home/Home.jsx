/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { ScrollRestoration } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
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
    useTitle('Pro Peak | Find Your Dream Job');
    return (
        <section>
            <Hero />
            <div className="mx-2 md:mx-0">
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
            <ScrollRestoration />
        </section>
    );
}

export default Home;
