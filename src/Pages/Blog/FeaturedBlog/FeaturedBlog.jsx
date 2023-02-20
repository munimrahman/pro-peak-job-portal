import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img-news1.png';

function FeaturedBlog() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 rounded-xl shadow-xl border">
            <figure className="col-span-5">
                <img
                    src={img}
                    alt="Album"
                    className="w-full h-full rounded-tl-xl rounded-tr-xl md:rounded-l-xl md:rounded-tr-none"
                />
            </figure>
            <div className="md:col-span-7 px-8 md:p-8 my-3">
                <div className="flex flex-wrap">
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        JavaScript
                    </span>
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1">
                        React
                    </span>
                </div>
                <Link to="/blog-details">
                    <h2 className="text-secondary text-4xl font-bold hover:text-primary mt-2 hover:cursor-pointer">
                        Improve Your Business With These 8 Simple Tricks
                    </h2>
                </Link>
                <p className="my-5 text-accent">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequatur
                    sapiente quaerat in dolor id eos vitae voluptates magnam omnis, rerum, saepe
                    adipisci nesciunt quasi vero quidem obcaecati blanditiis incidunt.
                </p>
                <div className="card-actions justify-start">
                    <Link to="/blog-details">
                        <span className="text-primary hover:underline hover:underline-offset-1 text-sm font-bold hover:cursor-pointer">
                            Read More
                            <i className="fas fa-arrow-right text-xs ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedBlog;
