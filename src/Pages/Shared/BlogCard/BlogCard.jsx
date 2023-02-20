import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img-news1.png';
import userImg from '../../../assets/user1.png';

function BlogCard() {
    return (
        <div className="border rounded-xl p-2 shadow-md">
            <img src={img} alt="" className="rounded-xl w-full" />

            <div className="px-1">
                <Link to="/blog-details">
                    <h2 className="text-secondary hover:text-primary text-lg hover:cursor-pointer font-bold mt-4">
                        React Native Web Developer Salary $4000 Per Month
                    </h2>
                </Link>
                <div className="mt-1 flex flex-wrap">
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        JavaScript
                    </span>
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        React
                    </span>
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        Node
                    </span>
                    <span className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        Express
                    </span>
                </div>
                <p className="text-sm text-accent my-3">
                    Our mission is to create the world & rsquo;s most sustainable healthcare company
                    by creating high-quality healthcare products in iconic, sustainable packaging.
                </p>
                <div className="flex justify-between items-end mb-3">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={userImg} alt="" />
                            </div>
                        </div>
                        <div className="ml-2 flex flex-col">
                            <span className="text-neutral text-base font-bold">Steven Jobs</span>
                            <span className="text-neutral text-xs">06 September</span>
                        </div>
                    </div>
                    <span className="text-neutral text-xs">8 mins to read</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
