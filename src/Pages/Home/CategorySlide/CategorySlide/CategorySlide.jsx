/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideCard from '../SlideCard/SlideCard';
import './CategorySlide.css';

const categories = [
    {
        _id: 1,
        name: 'Marketing & Sale',
        value: 'Marketing & Sale',
        jobCount: 154,
    },
    {
        _id: 2,
        name: 'Finance',
        value: 'Finance',
        jobCount: 234,
    },
    {
        _id: 3,
        name: 'Software',
        value: 'Software Development',
        jobCount: 654,
    },
    {
        _id: 4,
        name: 'Management',
        value: 'Management',
        jobCount: 231,
    },
    {
        _id: 5,
        name: 'Web',
        value: 'Web Development',
        jobCount: 543,
    },
    {
        _id: 6,
        name: 'Content Writer',
        value: 'Content Writer',
        jobCount: 123,
    },
    {
        _id: 7,
        name: 'Others',
        value: 'Others',
        jobCount: 123,
    },
];

function CategorySlide() {
    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Browse by Category</h1>
            <p className="text-lg text-neutral text-center my-2">
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </p>
            <div className="my-10">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#174de2',
                        '--swiper-navigation-size': '20px',
                    }}
                    breakpoints={{
                        // When the window width is >= 592px
                        592: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                    centeredSlides={false}
                    navigation
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category._id}>
                            <SlideCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default CategorySlide;
