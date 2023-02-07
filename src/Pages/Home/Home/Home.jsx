/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import job from '../../../assets/job-search-bar.svg';
import key from '../../../assets/key-search-bar.svg';
import loc from '../../../assets/location-search-bar.svg';
import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero';

function Home() {
    return (
        <section>
            <Hero />
            <h1 className="text-4xl text-secondary text-center font-bold">Browse by Category</h1>
            <p className="text-lg text-neutral text-center">
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </p>
            <div className="border border-red-600 bg-purple-400 p-2 w-full mx-auto">
                {/* <form className="flex justify-between p-3 border border-primary">
                    <label className="flex">
                        <img src={job} alt="" className="w-auto" />
                        <select className="select select-ghost active:outline-none focus:outline-none">
                            <option>Industry</option>
                            <option>Vue</option>
                            <option>React</option>
                        </select>
                    </label>

                    <label className="flex">
                        <img src={loc} alt="" />
                        <select className="select select-ghost active:outline-none focus:outline-none">
                            <option>Location</option>
                            <option>Bangladesh</option>
                            <option>Nepal</option>
                        </select>
                    </label>
                    <label className="flex">
                        <img src={key} alt="" />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-ghost active:outline-none focus:outline-none"
                        />
                        <input type="button" className="btn" value="Search" />
                    </label>
                </form> */}
                <div className="">
                    <div className="container flex flex-col md:flex-row justify-center items-center">
                        <div className="relative h-14">
                            <div className="absolute top-[20px] left-[10px]">
                                <img src={job} alt="" />
                            </div>
                            <select className="h-14 w-auto pl-8 pr-2 md:pl-10 md:pr-20 rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg z-0 focus:outline-none bg-white">
                                <option>Industry</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className="relative h-14">
                            <div className="absolute top-[20px] left-[7px]">
                                <img src={loc} alt="" />
                            </div>
                            <select className="h-14 w-auto pl-8 pr-2 rounded-lg md:rounded-none md:pl-10 md:pr-20 z-0 focus:outline-none bg-white">
                                <option>Location</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className="relative">
                            <div className="absolute top-[23px] left-3">
                                {/* <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" /> */}
                                <img src={key} alt="" />
                            </div>
                            <input
                                type="text"
                                className="h-14 pl-10 pr-20 rounded-l-lg md:rounded-l-none rounded-r-lg z-0 focus:outline-none"
                                placeholder="Search anything..."
                            />
                            <div className="absolute top-2 right-2">
                                <button className="flex justify-center items-center h-10 w-20 text-white rounded-lg bg-primary hover:bg-secondary">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col">
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <p className="munim">Hello</p>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
            </div> */}
            <Footer />
        </section>
    );
}

export default Home;
