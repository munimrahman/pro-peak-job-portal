/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/ProPeak1.png';
import google from '../../../assets/android.png';
import apple from '../../../assets/app-store.png';

function Footer() {
    return (
        <footer className="mt-16 max-w-[1115px] mx-auto px-2 lg:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12">
                <div className="col-span-3">
                    <img src={logo} alt="" className="w-44" />

                    <p className="text-sm my-4 text-neutral">
                        ProPeak is the heart of the developer community and the best resource to
                        discover and connect with developers and jobs worldwide.
                    </p>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <Link to="/" className="text-accent hover:text-primary">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </Link>
                        <Link to="/" className="ml-3 text-accent hover:text-primary">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </Link>
                        <Link to="/" className="ml-3 text-accent hover:text-primary">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </Link>
                        <Link to="/" className="ml-3 text-accent hover:text-primary">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" stroke="none" />
                            </svg>
                        </Link>
                    </span>
                </div>
                <div className="col-span-2">
                    <h4 className="font-bold text-secondary">Resources</h4>
                    <div className="flex flex-col mt-2">
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/job-details">Job Details</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/company-details">Company Details</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/recruiter-details">Recruiter Details</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/candidate-details">Candidate Details</Link>
                        </span>
                    </div>
                </div>
                <div className="col-span-2">
                    <h4 className="font-bold text-secondary">Quick Links</h4>
                    <div className="flex flex-col mt-2">
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/candidate-profile">Candidate Profile</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/recruiter-profile">Recruiter Profile</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/blog-details">Blog Details</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/dashboard">Dashboard</Link>
                        </span>
                    </div>
                </div>
                <div className="col-span-2">
                    <h4 className="font-bold text-secondary">Quick Links</h4>
                    <div className="flex flex-col mt-2">
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/about">About Us</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/contact">Contact Us</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer my-1">
                            <Link to="/log-in">Log In</Link>
                        </span>
                        <span className="text-accent text-sm hover:text-primary hover:cursor-pointer">
                            <Link to="/sign-up">Sign Up</Link>
                        </span>
                    </div>
                </div>

                <div className="col-span-3">
                    <h4 className="font-bold text-secondary">Download App</h4>
                    <p className="mt-2 text-sm">
                        Download our Apps and get extra 15% Discount on your first Order…!
                    </p>
                    <div className="mt-2">
                        <img src={google} alt="" className="my-1" />
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>

            <div className="divider" />

            <div className="text-accent text-xs flex flex-col sm:flex-row items-center justify-between mb-7">
                <span>Copyright © 2022. JobBox all right reserved</span>
                <div className="mt-2 sm:mt-0">
                    <span className="hover:cursor-pointer hover:text-primary">Privacy Policy</span>
                    <span className="hover:cursor-pointer hover:text-primary mx-5">
                        Terms & Conditions
                    </span>
                    <span className="hover:cursor-pointer hover:text-primary">Security</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
